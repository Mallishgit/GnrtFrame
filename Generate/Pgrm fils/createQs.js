var tId=1;
var size=["s","m","l"];
var j=0;
function newQ()
{
	var tbl=document.createElement("table");
	tbl.border="2";
	tbl.id="tbl"+tId;
	tId++;
	var tr=document.createElement("tr");
	tr.id=tbl.id+"tr"+1;
	tr.setAttribute("data-nOfTd","1");
	var td=document.createElement("td");
	td.id=tr.id+"td"+1;
	var rdo=document.createElement("input");
	rdo.type="radio";
	rdo.id=td.id+"r"+1;
	rdo.name="rdo";
	rdo.onclick=function()
	{
		setId(this.parentNode.id,btn,cpBtn,addVal,optId,sImgId,nLId,addblnk);
	}
	td.appendChild(rdo);
	tr.appendChild(td);
	tbl.appendChild(tr);
	qDiv.appendChild(tbl);
}
var pid;
var color;
function deleteSItm()
{
	var del_Itm=document.getElementById(btn.getAttribute("data-delItm"));
	del_Itm.remove();
	sImgId.setAttribute("data-myId",null);
}
function delImg()
{
	var infDelImg=imgDel.getAttribute("data-delImg");
	var delTd=document.getElementById(infDelImg);
	var len=delTd.parentElement.children;
	//var parElm=delTd.parentElement;
	if(delTd.getAttribute("data-conf")=="true")
	{
		alert("this image will not be deleted,because it is availabe in Qs Table");
		/*if(confirm("This image is present in table Do you want to  delete it"))
		{
			delTd.remove();
		}*/
	}
	else
	{
		if(confirm("Do you want to  delete it"))
		{
			delTd.remove();
		}
	}		
	for(var i=0;i<len.length;i++)
	{
		var imgElm=len[i].firstElementChild;
		imgElm.setAttribute("data-myInd",i);
	}
}
function setBlnkToQs(addblnk)
{
	var selfProperty=document.getElementById(addblnk.getAttribute("data-delItm"));//delItm=selected row
	var t_Itm=parseInt(selfProperty.getAttribute("data-nOfTd"));
	var td=document.createElement("td");
	td.id=selfProperty.id+"td"+(++t_Itm);
	selfProperty.setAttribute("data-nOfTd",t_Itm);
	var tx=document.createElement("input");
	tx.type="text";
	tx.value=blnkTxt.value;
	tx.id=td.id+"q";
	tx.size="6"
	tx.className="txtclr";
	tx.setAttribute("data-subNm","editBx");
	tx.onclick=function()
	{
		//var id=tx.id
		sItm(this);
	}
	td.appendChild(tx);
	selfProperty.appendChild(td);
}
function setQs(selfId)
{
	var selfProperty=document.getElementById(selfId.getAttribute("data-delItm"));
	//var selfChild=selfProperty.children;
	//var nbrOfCh=selfChild.length;
	var t_Itm=parseInt(selfProperty.getAttribute("data-nOfTd"));
	var td=document.createElement("td");
	td.id=selfProperty.id+"td"+(++t_Itm);//
	selfProperty.setAttribute("data-nOfTd",t_Itm);
	var tx=document.createElement("input");
	tx.type="text";
	tx.id=td.id+"q";
	tx.size="6"
	tx.value=txbx.value;
	tx.onclick=function()
	{
		//var id=tx.id
		sItm(this);
	}
	td.appendChild(tx);
	selfProperty.appendChild(td);
}
function sizeRotet(rtBtn)
{
	j++;
	r=j%3;
	//alert(r);
	//var lblImgElm=document.getElementById("d2IdLbl1Id");
	rtBtn.value=size[r];
}
function setImgToQs(selfId)
{
	var selfProperty=document.getElementById(selfId.getAttribute("data-delItm"));//delItm=selected row
	//var selfChild=selfProperty.children;
	//var nbrOfCh=selfChild.length;
	var t_Itm=parseInt(selfProperty.getAttribute("data-nOfTd"));
	var imgTd=selfId.getAttribute("data-myId");
	var srcImgTd=selfId.getAttribute("data-sourceImg");
	var srcImgInd=document.getElementById(srcImgTd).firstElementChild.getAttribute("data-myInd");
	if(imgTd==null ||imgTd=="null")
	{
		var td=document.createElement("td");
		//var srcId=td.getAttribute("data-mySource");
		td.id=selfProperty.id+"td"+(++t_Itm);//
		selfProperty.setAttribute("data-nOfTd",t_Itm);
		var image=document.createElement("img");
		var imgPath=selfId.getAttribute("data-sourceImg")
		image.src=document.getElementById(imgPath).firstElementChild.src;
		image.id=td.id+"img";
		image.border="2";
		image.setAttribute("data-myInd",srcImgInd);
		image.setAttribute("data-mySource",sImgId.getAttribute("data-sourceImg"));
		image.width="50";
		image.height="50";
		//var imgInd=d2IdImg1Id.getAttribute("data-myInd");
		//image.setAttribute("data-myInd",imgInd);
		/*if(d2IdLbl1Id.innerHTML=="s"){
			image.width="50";
			image.height="50";
		}
		else if(d2IdLbl1Id.innerHTML=="m"){
			image.width="100";
			image.height="100";
		}
		else if(d2IdLbl1Id.innerHTML=="l"){
			image.width="150";
			image.height="150";
		}*/
		//tx.value=txbx.value;
		image.onclick=function()
		{
			//var id=tx.id
			sItm(this);
		}
		var sizeBtn=document.createElement("input");
		sizeBtn.type="button";
		sizeBtn.id=td.id+"btn";
		sizeBtn.value="s";
		sizeBtn.style="width:30";
		sizeBtn.onclick=function()
		{
			
			sizeRotet(this);
		}
		td.appendChild(image);
		td.appendChild(sizeBtn);
		selfProperty.appendChild(td);
	}
	else
	{
		var prnt=document.getElementById(imgTd).parentElement;
		var image=document.createElement("img");
		var imgPath=selfId.getAttribute("data-sourceImg")
		image.src=document.getElementById(imgPath).firstElementChild.src;
		image.id=prnt.id+"img";
		image.border="2";
		image.setAttribute("data-myInd",srcImgInd);
		image.setAttribute("data-mySource",sImgId.getAttribute("data-sourceImg"));
		image.width="50";
		image.height="50";
		image.onclick=function()
		{
			//var id=tx.id
			sItm(this);
		}
		var sizeBtn=document.createElement("input");
		sizeBtn.type="button";
		sizeBtn.id=prnt+"btn";
		sizeBtn.value="s";
		sizeBtn.onclick=function()
		{
			j++;
			r=j%3;
			//alert(r);
			//var lblImgElm=document.getElementById("d2IdLbl1Id");
			this.value=size[r];
		}
		var children=prnt.children;
		children[0].remove();
		children[0].remove();
		prnt.appendChild(image);
		prnt.appendChild(sizeBtn);
		sImgId.setAttribute("data-myId",null);	
	
	}
	/*var setConfToBImg=document.getElementById(image.getAttribute("data-mySource"));
	setConfToBImg.setAttribute("data-Conf","true");
	var i=1;
	//var pImg=parseInt(setConfToBImg.getAttribute("data-appear"));
	var pImg=setConfToBImg.getAttribute("data-appear");
	if(pImg==null)
		setConfToBImg.setAttribute("data-appear",i);
	else
		setConfToBImg.setAttribute("data-appear",parseInt(pImg));*/	
}
var elemCp=null;
var delNode=null;
function leftMove()
{
	var mElem=lMove.getAttribute("data-myId");//it gives td id
	var prntElem=document.getElementById(mElem).parentElement;// it gives row
	var elemCp=prntElem.cloneNode(true);
	var child=elemCp.children;
	if(child[0].tagName=="IMG")
	{	
		child[0].onclick=function()
		{
			var itm=document.getElementById(mElem);
			sItm(itm);
		}
		child[1].onclick=function()
		{
			sizeRotet(this);
		}

	}
	else
	{
		elemCp.onclick=function()
		{
			var itm=document.getElementById(mElem);
			sItm(itm);
		}
	}	
	var pr=prntElem.parentElement;//it gives tbl
	var child=pr.children; // it gives children contained by table
	var lftSbl=prntElem.previousElementSibling;
	if(lftSbl.firstElementChild.type=="radio")
	{
		return;
	}
	pr.insertBefore(elemCp,lftSbl);
	pr.removeChild(prntElem);		
}
function rightMove()
{
	var mElem=rMove.getAttribute("data-myId");
	var prntElem=document.getElementById(mElem).parentElement;
	var elemCp=prntElem.cloneNode(true);
	var child=elemCp.children;
	if(child[0].tagName=="IMG")
	{	
		child[0].onclick=function()
		{
			var itm=document.getElementById(mElem);
			sItm(itm);
		}
		child[1].onclick=function()
		{
			sizeRotet(this);
		}

	}
	else
	{
		elemCp.onclick=function()
		{
			var itm=document.getElementById(mElem);
			sItm(itm);
		}
	}
	var pr=prntElem.parentElement;
	var child=pr.children;
	var nextNode=prntElem.nextElementSibling;
	pr.insertBefore(elemCp,nextNode.nextElementSibling);
	pr.removeChild(prntElem);	
}
function setToQT(scId,oId)
{
	var selfProperty=document.getElementById(oId.getAttribute("data-delItm"));//tr//tbl1tr1
	var numOfTd=scId.getElementsByTagName("td");//length of options;
	var len=numOfTd.length;
	var td=document.createElement("td");
	var sCL=parseInt(selfProperty.getAttribute("data-nOfTd"));
	td.id=selfProperty.id+"td"+(++sCL);
	selfProperty.setAttribute("data-nOfTd",sCL);
	var trArry=optId.getElementsByTagName("tr");
	var count=0,i=0;
	while(trArry[i].id!=scId.id)
	{
		count+=1;
		i++;
	}
	var drpdn=document.createElement("select");
	drpdn.setAttribute("data-myInd",count);
	//var t_td=selfProperty.children;
	drpdn.id=td.id+"q";
	drpdn.className="qt";
	drpdn.onclick=function()
	{
		sItm(this);
	}
	td.appendChild(drpdn);
	alert("please select answer");	
	selfProperty.appendChild(td);//
	var nOTd=scId.getElementsByTagName("td");
	for(var i=0;i<len;i++)
	{
		var f_Itm=nOTd[i].firstElementChild;
		//var s_Itm=nOTd[i].firstElementChild.nextSibling;
		var tdVal=f_Itm.id;
		var gVal=document.getElementById(tdVal);
		if(gVal.value=="")
			continue;
		var opt=document.createElement("option")
		//opt.value=s_Itm.value;
		opt.innerHTML=gVal.value;
		drpdn.appendChild(opt);
	}
}
function makeCopy()
{
	var atr=cpBtn.getAttribute("data-delItm");
	var atrid=document.getElementById(atr);
	var cp=atrid.cloneNode(true);
	var tblElem=atrid.parentElement;
	tblElem.appendChild(cp);
	trCount=tblElem.childElementCount;
	cp.id=tblElem.id+"tr"+trCount;
	var trChild=cp.children;
	trChild[0].id=cp.id+"td1";
	trChild[0].firstElementChild.id=cp.id+"td1"+"r"+trCount;
	trChild[0].firstElementChild.checked=false;
	trChild[0].firstElementChild.name="rdo";
	trChild[0].firstElementChild.onclick=function()
	{
		//setId(this.parentNode.id,btn,cpBtn,addVal,optId,sImgId,nLId);
		setId(this.parentNode.id,btn,cpBtn,addVal,optId,sImgId,nLId,addblnk);	
	}
	for(var k=1;k<trChild.length;k++)
	{
		var accSubNm=trChild[k-1].getAttribute("data-subNm");
		if(accSubNm=="editBx")
		{
			trChild[k-1].firstElementChild.className="txtclr";
		}
		trChild[k].id=cp.id+"td"+(k+1);
		trChild[k].firstElementChild.style="border-color:"+color;
		trChild[k].firstElementChild.border="0";
		trChild[k].firstElementChild.id=cp.id+"td"+(k+1)+"q";
		//trChild[k].firstElementChild.className="qt";
		trChild[k].firstElementChild.border="2";
		trChild[k].firstElementChild.onclick=function()
							{
								sItm(this)
							}
		var rBtn=trChild[k].firstElementChild.nextSibling
		if(rBtn!=null)
		{
			rBtn.onclick=function()
			{
				sizeRotet(this)
			}
		}
	}
	//attEvent(cp);
}
/*function attEvent(rw)
{
	rw.onclick=function(e)
	{
		sItmC(e);	
	}
}*/
function setId(rid,dlt,cp,nQt,opTbl,sImg,nOptBtnId,blkId)
{
	var ptag=document.getElementById(rid).parentNode.id;
	dlt.setAttribute("data-delItm",ptag);
	cp.setAttribute("data-delItm",ptag);
	nQt.setAttribute("data-delItm",ptag);
	sImg.setAttribute("data-delItm",ptag);
	nOptBtnId.setAttribute("data-delItm",ptag);
	var tbl=opTbl.getElementsByTagName("tr");
	blkId.setAttribute("data-delItm",ptag);
	for(var i=0;i<tbl.length;i++)
	{
		var rw=tbl[i].firstElementChild;
		rw.setAttribute("data-delItm",ptag);
	}
	sImgId.setAttribute("data-myId",null);	
}
count=0;
var color;
function sItm(srcid)
{
		//alert(srcid.id);	
		if(pid==srcid.id)
		{
			color=srcid.style.border-color;
			srcid.style="border-color:"+color;
			var lId=document.getElementById("lMove");
			lId.setAttribute("data-myId","");
			var rId=document.getElementById("rMove");
			rId.setAttribute("data-myId","");
			btn.setAttribute("data-delItm","");
			//if(srcid.tagName=="IMG")
				sImgId.setAttribute("data-myId",null);
			pid=null;
		}
	
		else
		{
			var pidDoc=document.getElementById(pid);
			if(pid!=srcid && pid!=undefined && pidDoc!=null)
			{
				pidDoc.style="border-color:"+color;
				var lId=document.getElementById("lMove");
				lId.setAttribute("data-myId","");
				var rId=document.getElementById("rMove");
				rId.setAttribute("data-myId","");
				btn.setAttribute("data-delItm","");
				//if(srcid.tagName=="IMG")
					sImgId.setAttribute("data-myId",null);
				pid==null;
			}
			pid=srcid.id;
			//prId=pid;
			color=srcid.style.border-color;
			srcid.style="border-color:yellow";
			var lId=document.getElementById("lMove");
			lId.setAttribute("data-myId",srcid.id);
			var rId=document.getElementById("rMove");
			rId.setAttribute("data-myId",srcid.id);
			btn.setAttribute("data-delItm",srcid.parentElement.id);
			if(srcid.tagName=="IMG")
				sImgId.setAttribute("data-myId",srcid.id);
		}
}
function sItmC(myE)
{	
	var srcid=myE.target;
	if(myE.target.matches(".qt"))
		if(pid==srcid.id)
		{
			srcid.style="border-color:"+color;
			var lId=document.getElementById("lMove");
			lId.setAttribute("data-myId","");
			var rId=document.getElementById("rMove");
			rId.setAttribute("data-myId","");
			btn.setAttribute("data-delItm","");
			pid=null;
		}
	
		else
		{
			var pidDoc=document.getElementById(pid);
			if(pid!=srcid && pid!=undefined && pidDoc!=null)
			{
				pidDoc.style="border-color:"+color;
				var lId=document.getElementById("lMove");
				lId.setAttribute("data-myId","");
				var rId=document.getElementById("rMove");
				rId.setAttribute("data-myId","");
				btn.setAttribute("data-delItm","");
				pid==null;
			}
			pid=srcid.id;
			//prId=pid;
			color=srcid.style.border-color;
			srcid.style="border-color:yellow";
			var lId=document.getElementById("lMove");
			lId.setAttribute("data-myId",srcid.id);
			var rId=document.getElementById("rMove");
			rId.setAttribute("data-myId",srcid.id);
			btn.setAttribute("data-delItm",srcid.parentElement.id);
		}
}
