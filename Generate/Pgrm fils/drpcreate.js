var tblLen=0;
var creatTArear=false;
var i=0;
var j=1;
var tbl;
var imgInd=0;
var i=1;
var pImg="null";
var prColor;
var disC=1
function callCreate()
{
	var tr;
	tbl=doCreate("table",tblDiv);
	setAtribute(tbl,"id","myTbl");
	//txarId.disabled=true;
	var nDrp=doCreate("input",optDivId,"button");
	setAtribute(nDrp,"value","New List");
	setAtribute(nDrp,"id","nLId");
	var prgrf=document.createElement("p");//paragraf
	prgrf.innerHTML="Open data file";
	scrDiv.appendChild(prgrf);
	var fAd=doCreate("input",scrDiv,"text");
	setAtribute(fAd,"id","txId");
	var setF=doCreate("input",scrDiv,"button");
	setAtribute(setF,"value","Set File");
	setF.onclick=function()
	{
		var myScript=document.createElement("script");
		myScript.setAttribute("src",txId.value);
		document.body.appendChild(myScript);
		if(disC==1){
			var myBtn=doCreate("input",scrDiv,"button");
			myBtn.value="Display";
			disC=0;
		}
		myBtn.onclick=function(){
			for(var m=0;m<ddOption.length;m++)
			{
				tr=doCreate("tr",optId)
				setAtribute(tr,"id","myTbltr"+j);
				var rdo=nLId.getAttribute("data-delItm");
				var sToQt=doCreate("input",tr,"button");
				setAtribute(sToQt,"value","setToQt");
				if(rdo!="null"){
					setAtribute(sToQt,"data-delItm",rdo);}
				setAtribute(sToQt,"id","drpbtn"+i);
				sToQt.onclick=function()
				{
					setToQT(this.parentElement,sToQt);
				}
				//sEListener(sToQt,"click",setToQT[tr.id,sToQt.id]);	
				//sEListener(dlt,"click",removeRow);
				var dlt=doCreate("input",tr,"button");
				setAtribute(dlt,"value","Delete");
				setAtribute(dlt,"id","del"+i);
				sEListener(dlt,"click",removeRow);
				var ins=doCreate("input",tr,"button");//document.createElement("input")
				setAtribute(ins,"value","+");
				setAtribute(ins,"id","btn"+i);
				sEListener(ins,"click",callAddData);
				for(var n=0;n<ddOption[m].length;n++)
				{
					var td=doCreate("td",tr);
					setAtribute(td,"id","myTbltr"+j+"td"+n);
					var tgNm=doCreate("input",td,"text");
					var txIdVal="myTbltr"+j+"td"+n+"tx"+n;
					setAtribute(tgNm,"id",txIdVal);
					setAtribute(tgNm,"size","4");
					tgNm.value=ddOption[m][n];
					/*var idx=doCreate("input",td,"number");
					idx.className="txtclr";
					var idxIdVal="myTbltr"+j+"td"+n+"idx"+n;
					setAtribute(idx,"id",idxIdVal);
					setAtribute(idx,"min","0");
					setAtribute(idx,"max","3");
					setAtribute(idx,"size","1");*/			
					
				}
				j++;
				i++;tblLen+=1;
			}
			for(var p=0;p<imgAry.length;p++)
			{
				setImg(imgAry[p]);
			}
	//alert(ddOption.length);
	var str="";
	tmplt.value=templMatch.slice(1,templMatch.length-2);
	pgTtl.value=pgTitle;
	pgInst.value=pgInstruction;
	//pgClr.value=fltRegionColor;
	for(var i=0;i<quesAns.length;i++)
	{
		var qn=i+1;
		var tbl=document.createElement("table");
		tbl.border="2";
		tbl.id="tbl"+tId;
		tId++;
		var sLen=quesAns[i].length;
		for(var j=0;j<sLen;j++)
		{
			var tr=document.createElement("tr");
			tr.id=tbl.id+"tr"+(j+1);
			tr.setAttribute("data-nOfTd","1");
			var td=document.createElement("td");
			td.id=tr.id+"td"+1;
			var rdo=document.createElement("input");
			rdo.type="radio";
			rdo.id=td.id+"r"+1;
			rdo.name="rdo";
			rdo.onclick=function()
			{	setId(this.parentNode.id,btn,cpBtn,addVal,optId,sImgId,nLId,addblnk);
			}
			td.appendChild(rdo);
			tr.appendChild(td);
			tbl.appendChild(tr);
			qDiv.appendChild(tbl);
			//var myRow=document.createElement("tr");
			var partStr=quesAns[i][j].split(G_SplitterTok);
			for(var k=0;k<partStr.length;k++)
			{
				var tokFound=false;
				for( var m=0;m<G_FormElmTok.length && !tokFound ;m++)
				{
					tokFound=true;
					tokStr=partStr[k].slice(0,G_FormElmTok[m].length)
					if(tokStr==G_imgIdTok)
					{
						createImage(partStr[k][G_imgIdTok.length],partStr[k].substring(G_imgIdTok.length+1),tr,qn.toString()+i,(i+1),(j+1),(k+2));
					}
					else if(tokStr==G_ddIdTok)
					{
						var drpdn = dynCreate("select",tr, "SelId"+i,qn,(i+1),(j+1),(k+2));
						//var drpdn=document.createElement("select");
						//var t_td=selfProperty.children;
						//drpdn.id=td.id+"q";
						drpdn.className="qt";
						drpdn.onclick=function()
						{
							sItm(this);
						}
						//td.appendChild(drpdn);
						//var ddTxt = prepAns(ddElem,partStr[i]);//newQA
						var qA=partStr[k].split(G_SAnsAryTok);
						var tmp = qA[0].substring(G_ddIdTok.length);//newQA
						//var qAns=exAns.split(G_SAnsAryTok);
						//setAnsAry(qA[1]);//newQA
						var mulAns = qA[1].slice(0,partStr[k].length-	G_EAnsAryTok.length).split("][");
						InsertOptions(drpdn,tmp,mulAns);
					}
					else if(tokStr==G_EdIdTok)
					{
						var td=document.createElement("td");
						var nOfTbl=qDiv.childElementCount;
						if(nOfTbl==0 || nOfTbl==null)
							td.id="tbl"+i+"tr"+(j+1)+"td"+(k+2);
						else	
							td.id="tbl"+nOfTbl+"tr"+(j+1)+"td"+(k+2);
						var qA=partStr[k].split(G_SAnsAryTok);
						var mulAns = qA[1].slice(0,partStr[k].length-	G_EAnsAryTok.length).split("][");
						var ansStr="";
						var ansL=0;
						for(;ansL<mulAns.length-1;ansL++)
						{
							ansStr+=mulAns[ansL];
							ansStr+=",";
						}
						ansStr+=mulAns[ansL].slice(0,(mulAns[ansL].length-3))
						var tx=document.createElement("input");
						tx.type="text";
						tx.id=td.id+"q";
						tx.value=ansStr;
						tx.size="6"
						tx.className="txtclr";
						tx.setAttribute("data-subNm","editBx");
						tx.onclick=function()
						{
							//var id=tx.id
							sItm(this);
						}
						td.appendChild(tx);
						tr.appendChild(td);
					}
					else
					{
						var tokFound=false;
					}
				}
				if(!tokFound)
				{
					var td=document.createElement("td");
					var nOfTbl=qDiv.childElementCount;
					if(nOfTbl==0 || nOfTbl==null)
						td.id="tbl"+i+"tr"+(j+1)+"td"+(k+2);
					else	
						td.id="tbl"+nOfTbl+"tr"+(j+1)+"td"+(k+2);
					var tx=document.createElement("input");
					tx.type="text";
					tx.value=partStr[k];
					tx.id=td.id+"q";
					tx.size="6"
					tx.onclick=function()
					{
						//var id=tx.id
						sItm(this);
					}
					td.appendChild(tx);
					tr.appendChild(td);
				}
				tr.setAttribute("data-nOfTd",(k+2));
			}
			tbl.appendChild(tr);
		}
		qDiv.appendChild(tbl);	
	}
			
		}
	}	
	nDrp.onclick=function()
	{
		//var rd=document.getElementById(nLId.getAttribute("data-delItm"));
		//var prntOfTd=rd.parentElement;
		var rdo=nLId.getAttribute("data-delItm");
		//var chElem=rd.firstElementChild;
		//chElem.firstElementChild.checked=false;
		tr=doCreate("tr",optId)
		setAtribute(tr,"id","myTbltr"+j);
		var sToQt=doCreate("input",tr,"button");
		setAtribute(sToQt,"value","setToQt");
		if(rdo!="null"){
			setAtribute(sToQt,"data-delItm",rdo);}
		setAtribute(sToQt,"id","drpbtn"+i);
		sToQt.onclick=function()
				{
					setToQT(this.parentElement,sToQt);
				}	
		var dlt=doCreate("input",tr,"button");
		setAtribute(dlt,"value","Delete");
		setAtribute(dlt,"id","del"+i);
		sEListener(dlt,"click",removeRow);//setting event listener to remove row
		var ins=doCreate("input",tr,"button");
		setAtribute(ins,"value","+");
		setAtribute(ins,"id","btn"+i);
		sEListener(ins,"click",callAddData);//setting event listener to add new datacell
		createOptn(tr,"myTbltr"+j);
		j++;
		i++;
	}
}
function setAtribute(elem,atr,val)
{
	elem.setAttribute(atr,val);
}
function sEListener(el,event,val)
{
	el.addEventListener(event,val);
}
function removeRow()
{
	//alert(this.parentNode.id);
	if(confirm("do you want to delete it"))
	{		
		this.parentNode.remove();
	}
}
function callAddData()
{
	var pId=this.parentNode.id;			
	var rInd=document.getElementById(pId).getElementsByTagName("td");
	var len=rInd.length;
	var nD=addData(len,pId);
	this.parentNode.appendChild(nD);
}
function addData(k,pid)
{
	var nTd=document.createElement("td");
	nTd.id=pid+"td"+k;
	var nTxt=document.createElement("input");
	nTxt.type="text";
	nTxt.id=pid+"td"+k+"tx"+k;
	nTxt.size=3;
	var nidx=document.createElement("input");
	nidx.type="number";
	nidx.id=pid+"td"+k+"idx"+k;
	nidx.min="0";
	nidx.max="10";
	nidx.size="1";
	nidx.className="txtclr";
	nTd.appendChild(nTxt);
	nTd.appendChild(nidx);
	return nTd;
}
function doCreate(tgName,elmId,type="")
{
	var tg=document.createElement(tgName);
	if(type!=0)
		tg.type=type
	elmId.appendChild(tg)
	return tg;
}
function createOptn(tr,toc)
{
	//alert("ok");
	for(k=0;k<4;k++)
	{
		var td=doCreate("td",tr);
		setAtribute(td,"id",toc+"td"+k);
		var tgNm=doCreate("input",td,"text");
		var txIdVal=toc+"td"+k+"tx"+k;
		setAtribute(tgNm,"id",txIdVal);
		setAtribute(tgNm,"size","2");
		//var idx=doCreate("input",td,"number");
		//idx.className="txtclr"
		//var idxVal=toc+"td"+k+"idx"+k;
		//setAtribute(idx,"id",idxVal);
		//setAtribute(idx,"size","1");
		//setAtribute(idx,"min","0");
		//setAtribute(idx,"max","10");	
		//setAtribute(idx,"className","txtclr");	
	}
	tblLen+=1;
}
function myFunc()
{
	lblId.innerHTML="s"	
}
function setImg(imgSrc)
{
	var td=document.createElement("td");
	//td.style="color:yellow";
	td.id="div"+i+"td"+i;
	td.onclick=function(){
		if(pImg=="null")
		{
			pImg=this.firstElementChild;
			prColor=pImg.style.border-color;
			this.firstElementChild.style="border-color:yellow";
			imgDel.setAttribute("data-delImg",this.id);
			sImgId.setAttribute("data-sourceImg",this.id);
		}
		else
		{
			if(pImg.id==this.firstElementChild.id)
			{
				pImg.style="border-color:"+prColor;
				pImg="null";
				imgDel.setAttribute("data-delImg","");
			}
			else
			{
				pImg.style="border-color:"+prColor;
				pImg=this.firstElementChild;
				prColor=this.firstElementChild.style.border-color;	
				this.firstElementChild.style="border-color:yellow";
				imgDel.setAttribute("data-delImg",this.id);
				sImgId.setAttribute("data-sourceImg",this.id);
			}
		}
	}
	dId.appendChild(td);
	var img=document.createElement("img");
	img.border="2";
	img.id=td.id+"img"+i;
	var imgDivChldrn=dId.children;
	imgInd=imgDivChldrn.length-1;
	img.setAttribute("data-myInd",imgInd);
	//imgInd++;//parseInt(img.getAttribute("data-myInd"));
	i++;
	if(imgSrc==undefined ||imgSrc==null || imgSrc=="")
	{
		/*try{
			img.src="../images/"+txid.value;
		}
		catch(err)
		{
			img.src=txid.value;
		}*/
		try {
                  img.src="../baseImgFolder/"+imgFolder.value+"/"+txid.value;
               } 
               catch ( e ) {
                  img.src=txid.value;
               }
	}
	else
		img.src=imgSrc;
	img.width="100";
	img.height="100";
	td.appendChild(img);
}
function createImage(ty, idx, dynQ, imgId,tL,rL,k)//3,s
{
	//var dynQObj=document.getElementById(dynQ);
	var elem=dynCreate("img",dynQ,imgId,-1,tL,rL,k);//document.createElement("img");
	elem.src=imgAry[idx];
	//elem.width=30;//G_stdImgSize[ty];
	elem.border="2";
	elem.setAttribute("data-myInd",idx);
	elem.setAttribute("data-mySource","div"+idx+"td"+idx);
	elem.width="50";
	elem.height="50";
	elem.onclick=function()
	{
		//var id=tx.id
		sItm(this);
	}
	var sizeBtn=document.createElement("input");
	sizeBtn.type="button";
	sizeBtn.id=elem.parentElement.id+"btn";
	sizeBtn.value=ty;
	sizeBtn.style="width:30";
	sizeBtn.onclick=function()
	{
		
		sizeRotet(this);
	}
	//td.appendChild(image);
	elem.parentElement.appendChild(sizeBtn);
	//selfProperty.appendChild(td);
	//dynQ.appendChild(elem);	
}
function dynCreate(tagNm, parElem, ElId,qaIdx=-1,tL,rL,k)
{
	var elemId;
	if(tagNm=="img")
		elemId="img";
	else
		elemId="q";
	var td=document.createElement("td");
	var nOfTbl=qDiv.childElementCount;
	if(nOfTbl==0 || nOfTbl==null)
		td.id="tbl"+tL+"tr"+rL+"td"+k;
	else
		td.id="tbl"+nOfTbl+"tr"+rL+"td"+k;
	var elem=document.createElement(tagNm);
	if(ElId !="")
	{
		elem.id=td.id+elemId;
	}
	if(qaIdx >=0)
	{
		elem.setAttribute(G_QAIndex,qaIdx);
	}
	td.appendChild(elem);
	parElem.appendChild(td);	
//	tocSeperate(elem)
	return elem;
}
function InsertOptions(ddE,ddIdx,ans)
{
	var ddix=parseInt(ddIdx);
	ddE.setAttribute("data-myInd",ddix);
	ans=ans[0].slice(0,(ans[0].length-3));
	for(var i=0;i<ddOption[ddix].length;i++)
	{
		var option = document.createElement("option");
		option.text=ddOption[ddix][i];
		if(option.text==ans)
		{
			option.selected="selected";
		}
		ddE.add(option);
	}	
}
function hideOrShowDiv()
{
	var elm=document.getElementById("pgStyle");
	if(elm.style.display==="none")
	{
		elm.style.display="block";
	}
	else
	{
		elm.style.display="none";
	}
}

