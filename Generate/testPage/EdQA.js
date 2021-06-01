var templMatch ="<>";
 var pgTitle="";
 var pgInstruction="";
 var fltRegionColor="#000000";
 var ddOption=[];
var ddi=0;
ddOption[ddi++]=["is","was","are","were"]
var imgAry=[];
imgAry=["../baseImgFolder/images/building.jpg","../baseImgFolder/images/watering.jpg","../baseImgFolder/images/planting.jpg"];
var quesAns=[];
 var qai=0;
quesAns[qai++]=["He"+G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"eating" , "They"+G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"are"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"eating"];
quesAns[qai++]=["Shiva and Parvathi"+G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"are"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"dancing" , "Shiva"+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"dancing"];
quesAns[qai++]=["sing,walk,eat,good(Take out unmathed word for a group)"+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"good"+G_EMulAnsE+G_EAnsTok , "sort,tall,eat,good(Take out unmathed word for a group)"+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"eat"+G_EMulAnsE+G_EAnsTok];
quesAns[qai++]=[G_imgIdTok +"s0"+ G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"building"+G_EMulAnsE+G_EAnsTok , "Shiva"+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"walking and he"+G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"observing the nature" , G_EdIdTok + G_SAnsTok+G_EMulAnsS+"is"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+"Shiva"+G_SplitterTok+"walking ?and he"+G_SplitterTok+"observing the nature?"];
quesAns[qai++]=[G_imgIdTok +"s2"+ G_SplitterTok+"he is"+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"watering"+G_EMulAnsE+G_EAnsTok , G_imgIdTok +"s3"+ G_SplitterTok+"They"+G_SplitterTok+G_ddIdTok +"0"+G_SAnsTok+G_EMulAnsS+"are"+G_EMulAnsE+G_EAnsTok+G_SplitterTok+G_EdIdTok + G_SAnsTok+G_EMulAnsS+"planting"+G_EMulAnsE+G_EAnsTok];

