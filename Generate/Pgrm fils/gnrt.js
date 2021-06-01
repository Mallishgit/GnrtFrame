function Download()
{
		var ans=[];
		ai=0;
		var str="";
		var ansStr="";
		var rwLen=optId.getElementsByTagName("tr");
		ansStr='var templMatch ="<'+tmplt.value+'>";\r\n var pgTitle="'+pgTtl.value+'";\r\n var pgInstruction="'+pgInst.value +'";\r\n var ddOption=[];\r\nvar ddi=0;\r\n';
		for(var l=0,m=0;l<rwLen.length;l++,m++)
		{
			var dLen=rwLen[l].getElementsByTagName("td");
			var k=3;
			while(k<dLen.length)
			{
				var str=dLen[k].firstElementChild;
				if(str==null ||str.value==0)
				{
					count++;
				}
				k++;
			}
			if(count==dLen.length)
			{
				m--;
				continue;
			}
			ansStr+="ddOption[ddi++]=[";
			for(var j=0;j<dLen.length;j++)
			{
				var txVal=dLen[j].firstElementChild;
				if(txVal.value==null)
				{
					continue;
				}
				else
				{
					if(j==dLen.length-1)
						ansStr+='"'+txVal.value+'"';
					else
						ansStr+='"'+txVal.value+'",';	
				}
			}
			ansStr+="]\r\n";
		}
		ansStr+="var imgAry=[];\r\n";
			var imgLs=dId.children;
			for(var r=0;r<imgLs.length;r++)
			{
				if(r==0)
				{
					ansStr+="imgAry=[";	
				}
				var srcSplit=imgLs[r].firstElementChild.src.split("/");
				var splitL=srcSplit.length;
				var adrs="../baseImgFolder/"+srcSplit[splitL-2]+"/"+srcSplit[splitL-1];
				if(r==imgLs.length-1)
					ansStr+='"'+adrs+'"];';
				else
					ansStr+='"'+adrs+'",';
			}
	ansStr+="\r\n";
	var tbls=qDiv.children;//tr1,tr2
	ansStr+="var quesAns=[];\r\n var qai=0;\r\n";
	//str="var ai=0;\r\n var ans=[]\r\n";
	for(var n=0;n<tbls.length;n++)
	{
		var myAns=[];
		var rws=tbls[n].children;
		if(rws.length==0)
		{
			continue;
		}
		ansStr+="quesAns[qai++]=[";
		str+="ans[ai++]=[";
		for(var i=0;i<rws.length;i++)
		{
			var dCells=rws[i].children;
			var ind=0;
			var dp=0;
			for(var j=1;j<dCells.length;j++)
			{
				var fElem=dCells[j].children;
				ind=parseInt(fElem[0].getAttribute("data-myInd"));
				if(fElem[0].tagName=="SELECT" && j==dCells.length-1)
				{
					ansStr+='G_ddIdTok +"'+ ind +'"+G_SAnsTok+';
					if(fElem[0].value=="")
					{
						var optCh=fElem[0].children;
						for(var l=0;l<optCh.length;l++)
						{
							if(optCh[l].innerHTML==fElem[0].options[fElem[0].selectedIndex].text)
							{
								ans[ai++]=optCh[l].innerHTML;	ansStr+='G_EMulAnsS+"'+optCh[l].innerHTML+'"+G_EMulAnsE+G_EAnsTok';
								break;
							}
						}
					}
					else
					{									
						ans[ai++]=fElem[0].value;	ansStr+='G_EMulAnsS+"'+fElem[0].value+'"+G_EMulAnsE+G_EAnsTok';
					}
					continue;	
				}
				if(fElem[0].tagName=="SELECT")
				{
						ansStr+='G_ddIdTok +"'+ ind +'"+G_SAnsTok+';
					if(fElem[0].value=="")
					{
						var optCh=fElem[0].children;
						for(var m=0;m<optCh.length;m++)
						{
							if(optCh[m].innerHTML==fElem[0].options[fElem[0].selectedIndex].text)
							{
								ans[ai++]=optCh[m].innerHTML;	ansStr+='G_EMulAnsS+"'+optCh[m].innerHTML+'"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+';
								break;
							}
						}
					}
					else
					{									
						ans[ai++]=fElem[0].value;	ansStr+='G_EMulAnsS+"'+fElem[0].value+'"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+';
					}
					continue;	
				}
				if(fElem[0].className=="txtclr" && j==dCells.length-1)
				{
					ansStr+='G_EdIdTok + G_SAnsTok+';
					ans[ai++]=fElem[0].value;
						ansStr+='G_EMulAnsS+"';
					var splitVal=(fElem[0].value).split(",");
					for(var q=0;q<splitVal.length;q++)
					{
						if(q==splitVal.length-1)
						{
							ansStr+=splitVal[q]+'"+G_EMulAnsE'
						}
						else
						{
							ansStr+=splitVal[q]+'"+G_EMulAnsE+G_EMulAnsS+"'
						}
					}
					ansStr+='+G_EAnsTok';
					continue;
				}
				if(fElem[0].className=="txtclr")
				{
					ansStr+='G_EdIdTok + G_SAnsTok+';
					ans[ai++]=fElem[0].value;
						ansStr+='G_EMulAnsS+"';
					var splitVal=(fElem[0].value).split(",");
					for(var q=0;q<splitVal.length;q++)
					{
						if(q!=0)
						{
							if(q==splitVal.length-1)
							{
								ansStr+=splitVal[q]+'"+G_EMulAnsE';
							}
							else
							{
								ansStr+=splitVal[q]+'"+G_EMulAnsE+G_EMulAnsS+"';
							}
						}
						else
						{
							if(q==splitVal.length-1)
								ansStr+=splitVal[q]+'"+G_EMulAnsE';
							else
								ansStr+=splitVal[q]+'"+G_EMulAnsE+G_EMulAnsS+"';
						}
						dp=1;	
					}
					ansStr+='+G_EAnsTok+G_SplitterTok+';
					continue;	
				}
				
				if(fElem[0].tagName=="IMG" && j==dCells.length-1)
				{
					ansStr+="G_imgIdTok +"+'"'+fElem[1].value+ind+'"';	
					continue;
				}
				if(fElem[0].tagName=="IMG")
				{
					ansStr+="G_imgIdTok +"+'"'+fElem[1].value+ind+'"'+"+ G_SplitterTok+";
					continue;	
				}	
				if(j==dCells.length-1)
				{
					ansStr+='"'+fElem[0].value+'"';
				}
				else{
					
					ansStr+='"'+fElem[0].value+'"+G_SplitterTok+';
				}
			}
			//ansStr+="];\r\n";
			if(i!=rws.length-1)
			{
				ansStr+=" , ";
				str+=",";
			}
		}
		str+="];\r\n";
		ansStr+="];\r\n";
	}
	const textToBLOB = new Blob([ansStr], { type: 'text/plain' });
    const sFileName = FlNameId.value;

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) 
    {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else 
    
    {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
	//ansStr+=str;	
}
