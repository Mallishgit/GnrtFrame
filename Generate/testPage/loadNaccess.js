//Shiva

function loadQs()
{	
	/*var ppQT= new PP_QuesText ("My Q");
	var myQT = ppQT.qText;
	alert(ppQT.qtNm());
	alert(myQT);*/
	var aB=doCreate("textarea",eBody,"logMsgId");		
	aB.style.display="none";
	aB.rows="8";
	aB.cols="40";
	ques=quesAns;  //newQA
	
	//Creating question and answer table
	var tbl=doCreate("table",eBody,"qsAnsTblId");
	setElemAttr(tbl,"border","4");
	setElemAttr(tbl,"align","center");
	//creating table gor heading and insLogo
	var hTbl=doCreate("table",qsAnsTblId,"hTblId");
	//setElemAttr(hTbl,"bgcolor","yellow");
	var hTblr1=doCreate("tr",hTblId,"hTblTr1");
	//setElemAttr(rw1,"style","color:blue");
	var logoTd=doCreate("td",hTblTr1,"logoId");
	setElemAttr(logoTd,"style","width:10");
	var headTd=doCreate("td",hTblTr1,"pgHeadId");
	var tblrw1=doCreate("tr",qsAnsTblId,"r1");
	var td1=doCreate("td",r1,"ttlId");
	setElemAttr(td1,"align","center");
	var rw2=doCreate("tr",qsAnsTblId,"r2");
	var td2=doCreate("td",r2,"qsAnsId");
	var rw3=doCreate("tr",qsAnsTblId,"r3");
	var td3=doCreate("td",r3,"resultId");	
	setElemAttr(td3,"align","center");
	
		//var hdg=doCreate(sz,eBody,"");
		//setInnerHTML(hdg,G_pgHeading);

	if(!(typeof G_pgHeading === "undefined") && G_pgHeading!="")
	{
		//var aI = resolveLocalOrGlobal("L_pgTitleSize",G_pgTitleSize)
		var logo=doCreate("img",logoId,"");
		logo.src=G_pgLogo;
		logo.width="100";
		logo.height="100";
		var hdg=doCreate(G_pgHeadingSize ,pgHeadId,"");
		setInnerHTML(hdg,G_pgHeading);
	}
	if(!(typeof pgTitle === "undefined") && pgTitle!="")
	{
		var aI = resolveLocalOrGlobal("L_pgTitleSize",G_pgTitleSize)
		var hdg=doCreate(aI ,ttlId,"");
		setInnerHTML(hdg,pgTitle);
	}
	
	if(!(typeof pgInstruction === "undefined") && pgInstruction !="" )
	{	
		var aI = resolveLocalOrGlobal("L_pgInstructionSize",G_pgInstructionSize)
		var pgInst=doCreate(aI,ttlId,"");
		setInnerHTML(pgInst,pgInstruction);
	}
	
	logMyMsg(3,"Entered loadQs");
	var ql=ques.length;
	logMyMsg(4,"Begin Creating Ans Box");	

	for(var i=0;i<ql;i++)
	{
		logMyMsg(5,"Creating QA-" + i);	
		var aI = resolveLocalOrGlobal("L_pgQSize",G_pgQSize)
		var q1=doCreate(aI,qsAnsId,"dynQ"+i);
		aI =resolveLocalOrGlobal("L_randomizeQs",G_randomizeQs);
		var qaIdx= (aI)?getRandomIntInclusive(0,ques[i].length-1):0;
		if(!(typeof ques[i] === "undefined") && !(typeof ques[i][qaIdx]==="undefined"))
		{
			tocSeperate(q1,ques[i][qaIdx],i+1,qaIdx);
			//var a1=doCreate("input",eBody,"");
			//a1.type="text";
			//setAsAns(a1);
		}
	}
	aB=doCreate("input",resultId,"accBtn");
	setElemAttr(aB,"type","button");
	setElemAttr(aB,"value","Assess Me");
	setEventHand(aB,"click",doAssess);

//	aB.onclick=function(){doAssess();}
	aB.value="Assess Me";
	aB=doCreate(G_pgQSize,resultId,"resId");	
	aB=doCreate("textarea",resultId,"logMsgId");	
	aB.style.display="none";		
}

function setInnerHTML(elem, val,doAppend=false)
{
	if(doAppend)
		elem.innerHTML += val;
	else
		elem.innerHTML=val;
}

function setElemAttr(elem,nm,val)
{
	elem.setAttribute(nm,val);
}

function setEventHand(elem, eve, hand)
{
	elem.addEventListener(eve,hand);
}

function resolveLocalOrGlobal(varEval,gEval)
{
	var lRQ=((typeof window[varEval]==="undefined") || window[varEval]==null ||  window[varEval].length==0)?gEval:window[varEval];
	return lRQ;
}

function createImage(ty, idx, dynQ, imgId)//3,s
{
	var elem=doCreate("img",dynQ,imgId);//document.createElement("img");
	elem.src=imgAry[idx];
	elem.width=G_stdImgSize[ty];
	dynQ.appendChild(elem);	
}

function setAsAns(aEl)
{
	aEl.className=G_ansClassNm;
}

function prepAns(anEl,exAns="")//newQA
{
	setAsAns(anEl);
	var qA=exAns.split(G_SAnsAryTok);
	setAnsAry(qA[1]);//newQA
	return qA[0];
}

function setAnsAry(exAns)//newQA
{
	var mulAns = exAns.slice(0,exAns.length-G_EAnsAryTok.length).split("][");
	dynAns.push(mulAns);
	
}
function tocSeperate(dynQElem, dynQ, qn,qaIdx)
{
	setInnerHTML(dynQElem,qn+") ");
	//var txV= (G_randomizeQs)?getRandomIntInclusive(0,ques[i].length-1):0;	//txId.value;
	var partStr=dynQ.split(G_SplitterTok);// txt,"tok", txt, "tok"
	for(var i=0;i<partStr.length;i++)
	{
		var tokStr="";
		var tokFound=false;
		for( var k=0;k<G_FormElmTok.length && !tokFound ;k++)
		{
			tokFound=true;
			tokStr=partStr[i].slice(0,G_FormElmTok[k].length)//^$! // ^$!s0
			// Create Image
			if(tokStr==G_imgIdTok)//(partStr[i][0]==G_imgIdTok)
			{	
				createImage(partStr[i][G_imgIdTok.length],partStr[i].substring(G_imgIdTok.length+1),dynQElem,qn.toString()+i);
				//tokFound=true;
			}
			// create dropdown
			else if(tokStr==G_ddIdTok)
			{
				var ddElem = doCreate("select",dynQElem, "SelId"+i,qaIdx);
				var ddTxt = prepAns(ddElem,partStr[i]);//newQA
				var tmp = ddTxt.substring(G_ddIdTok.length);//newQA
				//setAsAns(ddElem);
				//var tmp = partStr[i].substring(G_ddIdTok.length);
				InsertOptions(ddElem,tmp);
				//tokFound=true;
			}	
			else if(tokStr==G_EdIdTok)
			{				
				var edElem = doCreate("input",dynQElem, "EdId"+i,qaIdx);
				prepAns(edElem,partStr[i]);//newQA
				//setAsAns(edElem);
				edElem.type="text";
				//tokFound=true;
			}
			else
			{	
				tokFound=false;			
			}
		}
		if(!tokFound)
		{
			setInnerHTML(dynQElem,partStr[i],true);
			//dynQElem.innerHTML+=partStr[i];	
		}
	}
}


function InsertOptions(ddE,ddIdx)
{
	var ddix=parseInt(ddIdx);
	for(var i=0;i<ddOption[ddix].length;i++)
	{
		var option = document.createElement("option");
		option.text=ddOption[ddix][i];
		ddE.add(option);
	}	
}

function doCreate(tagNm, parElem, ElId,qaIdx=-1)
{
	var elem=document.createElement(tagNm);
	if(ElId !="")
	{
		elem.id=ElId;
	}
	if(qaIdx >=0)
	{
		elem.setAttribute(G_QAIndex,qaIdx);
	}
	parElem.appendChild(elem);	
//	tocSeperate(elem)
	return elem;
}

function logMyMsg(n,msg)
{
	if(G_logLevel >0)
	{
		if(n<=G_logLevel)
		{
			logMsgId.style.display="block";
			setInnerHTML(logMsgId,msg+"\r\n",true);
		}
	}
}

function doAssess()
{
	var aI =resolveLocalOrGlobal("L_attempts",G_attempts);
	if(G_currAttempt <= aI)
	{
		if(assessQplusA() != 0)//(assessAns() != 0)
			G_currAttempt++;
	}
	else
	{
		accBtn.disabled=true;
	}	
}

function matchAns2RandomizedQ(i)
{
	var cN=	document.getElementsByClassName(G_ansClassNm);
	var qaIdx=-1;
	if(!cN[i].dsiabled)
	{
		// Get the randomized Q index to match for the corresponding Answer. 
		if(cN[i].hasAttribute(G_QAIndex))
		{
			qaIdx=parseInt(cN[i].getAttribute(G_QAIndex));
			// if the answer at current index is empty that means the current answer is same as the previous index for which there is a valid answer defined.
			//Eg: if the randomized Q has an index of 5
			//Ans[i++]=[[Ans1],[],[Ans2],[],[],[]] . Here answer at index 5 is empty that means the answer at the index 5 matches with the answer at a previos index which has a non-empty answer defined .In this case it is index 2
			 

			while((typeof ans[i][qaIdx]) ==="undefined" && qaIdx >=0)
			{
				qaIdx--;
			}
			if(qaIdx<0)
			{
				logMyMsg (1, "Negative Answer Array Index ");
			}
		}
	}
	return qaIdx;
}

function hiliteIfError(i, correct=true)
{
	var aElem=document.getElementsByClassName(G_ansClassNm);
	if(correct)
	{
		aElem[i].style.color=G_cAnsClr;
		aElem[i].disabled=true;
	}
	else
	{
		//aElem.style.color=(usrAns !="")?(G_wAnsClr):(G_cAnsClr);
		aElem[i].style.color=G_wAnsClr;
	}
	//aElem.className="";
}

function getAnsList()
{
	var ansElem=document.getElementsByClassName(G_ansClassNm);
	var ansList=[];
	for(var i=0;i<ansElem.length;i++)
	{
		ansList[i]=ansElem[i].value;
	}	
	return ansList;
}

function assessAns()
{
	var cN=getAnsList();
	var cAns=0;
	var aDiff=-1;
	for(var i=0;i<ans.length;i++)
	{	
		var qaIdx=matchAns2RandomizedQ(i);
		if (qaIdx==-1)
		{
			continue;//Already assessed
		}
		var usrAns=cN[i].replace(/ /g,"");//replace spaces globally in user answer
		for(var k=0;k<ans[i][qaIdx].length;k++)
		{

			var givenAns = ans[i][qaIdx][k].replace(/ /g,"");
			if(givenAns !=usrAns && usrAns !="")
			{	
				hiliteIfError(i,false);
				//cN[i].style=(usrAns !="")?("color:"+G_wAnsClr):("color:"+G_cAnsClr);
			}
			else if (givenAns == usrAns)
			{	
				hiliteIfError(i);
				cAns++; 
				aDiff = (cAns == ans.length)?0:1;
				break;
			}
		}
	}	//alert(ans.length+","+cAns);
	showResults(cAns,ans.length);
	
	return aDiff;
}

function assessQplusA() //newQA
{
	var cN=getAnsList();
	var cAns=0;
	var aDiff=-1;
	var ansElem = document.getElementsByClassName(G_ansClassNm);
	for(var i=0;i<dynAns.length;i++)
	{	
		var qaIdx=-1;
		if(ansElem[i].disabled)//if (qaIdx==-1)
		{
			cAns++;
			continue;//Already assessed
		}
		var usrAns=cN[i].replace(/ /g,"");//replace spaces globally in user answer
		for(var k=0;k<dynAns[i].length;k++)
		{

			var givenAns = dynAns[i][k].replace(/ /g,"");
			if((givenAns !=usrAns && usrAns !="") || k==dynAns[i].length)
			{	
				hiliteIfError(i,false);
				//cN[i].style=(usrAns !="")?("color:"+G_wAnsClr):("color:"+G_cAnsClr);
			}
			else if (givenAns == usrAns)
			{	
				hiliteIfError(i);
				cAns++; 
				aDiff = (cAns == dynAns.length)?0:1;
				break;
			}
		}
	}	//alert(ans.length+","+cAns);
	showResults(cAns,dynAns.length);
	
	return aDiff;
}


function showResults(cAns,ans)
{
	var ana="Correct Answers = " +cAns+"<br> Wrong Answers = "+(ans-cAns) +"<br> Number of Attempts = "+ G_currAttempt+" of "+G_attempts;
	setInnerHTML(resId,ana);
}

//Get a random integer between two values, inclusive
function getRandomIntInclusive(min, max) 
{
	min = Math.ceil(min);
	max = Math.floor(max);
	var rV = Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and the minimum are inclusive 
	return rV;
}






