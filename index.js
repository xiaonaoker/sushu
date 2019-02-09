window.onload=function() {

    var a,i,num,arr1=[2],arr2=[],radical,ipt,
        btn1=document.getElementById("btn1"),
        btn2=document.getElementById("btn2"),
        rst=document.getElementById("rst");

    var primeSelection=function(max){
        for(num=3;num<=max;num++){//对3-ipt范围内的数字遍历，判断是否为素数
            radical=Math.sqrt(num);//3-ipt范围内的数字遍历的平方根
            for(i=2;i<=radical;i++){//对从2开始到小于等于这个数平方根的数进行遍历，判断是否为其因数
                if(num%i==0){//如果有可以整除的数字，即因数
                    arr2.push(i);//把该因数放入数组2
                }
            }
            if(arr2.length==0){//如果数组2的长度为0，即没有因数，为素数
                arr1.push(num);//将这个数放入数组
            }else
            arr2=[];//将数组2清空，存放下一组因数
        }
        rst.innerHTML=arr1.join("，");
        arr1=[2];
    };


    btn1.onclick=function(){
        rst.innerHTML="";
        ipt=parseFloat(document.getElementById("ipt").value);
        if(ipt<=0){
            alert("请输入一个正数");
        }else if(ipt==1){
            rst.innerHTML="1不是素数也不是合数";
        }else if(ipt==2){
            rst.innerHTML="2";
        }else{
            primeSelection(ipt);
        }
    };
    btn2.onclick=function(){
        rst.innerHTML="";
        ipt=document.getElementById("ipt");
        ipt.value="";
    }
};


