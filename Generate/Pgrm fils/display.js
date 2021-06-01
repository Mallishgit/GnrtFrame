function createQsTbl()
{
	//alert(ddOption.length);
	var str="";
	for(var i=0;i<quesAns.length;i++)
	{
		var qn=i+1;
		var myTbl=document.createElement("table");
		myTbl.border="2";
		var sLen=quesAns[i].length;//3
		for(var j=0;j<sLen;j++)
		{
			var myRow=document.createElement("tr");
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
						createImage(partStr[k][G_imgIdTok.length],partStr[k].substring(G_imgIdTok.length+1),myRow,qn.toString()+i);
					}
					else if(tokStr==G_ddIdTok)
					{
						var ddElem = doCreate("select",myRow, "SelId"+i,qn);
						//var ddTxt = prepAns(ddElem,partStr[i]);//newQA
						var qA=partStr[k].split(G_SAnsAryTok);
						var tmp = qA[0].substring(G_ddIdTok.length);//newQA
						InsertOptions(ddElem,tmp);
					}
					else if(tokStr==G_EdIdTok)
					{
						var myEd=document.createElement("input");
						myEd.type="text";
						myRow.appendChild(myEd);
					}
					else
					{
						var tokFound=false;
					}
				}
				if(!tokFound)
				{
						var myEd=document.createElement("input");
						myEd.type="text";
						myEd.value=partStr[k];
						myRow.appendChild(myEd);
				}
			}
			myTbl.appendChild(myRow);
		}
		document.body.appendChild(myTbl);	
	}
}
function createImage(ty, idx, dynQ, imgId)//3,s
{
	//var dynQObj=document.getElementById(dynQ);
	var elem=doCreate("img",dynQ,imgId);//document.createElement("img");
	elem.src=imgAry[idx];
	elem.width=30;//G_stdImgSize[ty];
	dynQ.appendChild(elem);	
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
