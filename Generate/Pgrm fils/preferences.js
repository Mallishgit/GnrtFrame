	//Customizable Constants
	var G_attempts=3;
	var G_cAnsClr="black";
	var G_wAnsClr="red";
	var G_logLevel=0;
	var G_randomizeQs=true;
	var G_stdImgSize={s:"40",m:"80", l:"120"};//var person = {firstName:"John", lastName:"Doe", age:46};
	var G_pgHeadingSize="h1";
	var G_pgTitleSize="h2";
	var G_pgInstructionSize="h3";
	var G_pgQSize="h4";
	var G_pgHeading="Vivekananda Kendra Vidyalaya Kallubalau";
	var G_pgLogo="../baseImgFolder/vkvImages/VK_Blue.png";
	
	
	//Program Constants
	var G_QAIndex="data-QAIdx";	
	var G_SplitterTok="`#!";
	var G_imgIdTok="^";
	var G_ddIdTok = "$_"; 
	var G_EdIdTok = "#_$";	
	var G_ansClassNm="antx";	
	var G_currAttempt=1;
	var G_SAnsTok="<{";//for questions file
	var G_EAnsTok="}>";//for questions file
	var G_EMulAnsS="[";
	var G_EMulAnsE="]";	
	var G_SAnsAryTok=G_SAnsTok+G_EMulAnsS;//for Dyn Ans Array
	var G_EAnsAryTok=G_EAnsTok+G_EMulAnsE;//for Dyn Ans Arry
	
	var G_FormElmTok=[G_imgIdTok, G_ddIdTok, G_EdIdTok];
	
	var dynAns=[];

