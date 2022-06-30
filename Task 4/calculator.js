function myfun(val){
    var num=val;
    document.getElementById('display').value+=num;
    }
    function answer(){
        var x=document.getElementById('display').value;
        var ans=eval(x);
        document.getElementById('display').value=ans;
    }
    function clean(){
        document.getElementById('display').value="";
    }