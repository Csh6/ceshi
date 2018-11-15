window.onload = function () {
  var bt1= document.getElementById("bt1");

  bt1.onclick = function () {
      var name = document.getElementById("text1");//用户名
      var psw = document.getElementById("text2");//密码
      var pswcheck = document.getElementById("text3");//确定密码
      var email = document.getElementById("text4");//邮箱
      var tel = document.getElementById("text5");//手机号
      var text6 = document.getElementById("text6");//邮编
      var text7 = document.getElementById("text7");//身份证号

      //用户名
      name.onblur=function()
      {
          var result = this.value.match(/^[a-z0-9A-Z]{5,10}$/);
          if (result == null)
          {
              document.getElementById("stext1").innerText="用户名格式有误";
          }
      }
      name.onfocus=function()
      {
          document.getElementById("stext1").innerText=null;
      }
      //判断密码
      psw.onblur=function()
      {
          var result= this.value.match(/^[a-zA-Z0-9]{6,15}&/);
          if(result == null)
          {
              document.getElementById("stext2").innerText="密码输入格式有误";
          }
      }
      psw.onfocus=function()
      {
          document.getElementById("stext2").innerText=null;
      }
      
      //验证密码
      pswcheck.onblur=function()
      {
          if (this.value != psw.value || this.value =="")
          {
              document.getElementById("stext3").innerText="密码不一致请重新输入";
          }
      }
      pswcheck.onfocus=function()
      {
          document.getElementById("stext3").innerText=null;
      }

      //检测邮箱
      email.onblur=function () {
          var result = this.value.match(/^[0-9]{5,11}@(qq|163|126)(\.com|\.cn|\.org)$/);
          if (result == null) {
              document.getElementById("stext4").innerText = "邮箱输入不合法";
          }
      }
      email.onfocus=function () {
          document.getElementById("stext3").innerText=null;
      }


      //验证手机号
      tel.onblur=function () {
          var result =this.value.match(/^1[0-9]{10}$/);
          if (result == null)
          {
              document.getElementById("stext5").innerText="手机号格式不正确";
          }
      }
      tel.onfocus=function () {
          document.getElementById("stext5").innerText=null;
      }

      //验证邮编、
      text6.onblur=function () {
          var result =this.value.match(/^1[0-9]{10}$/);
          if (result == null)
          {
              document.getElementById("stext6").innerText="邮政编码格式不正确";
          }
      }
      text6.onfocus=function () {
          document.getElementById("stext6").innerText=null;
      }

      //验证身份证号
      text7.onblur=function () {
          var result =this.value.match(/^1[0-9]{10}$/);
          if (result == null)
          {
              document.getElementById("7").innerText="身份证手机号格式不正确";
          }
      }
      text7.onfocus=function () {
          document.getElementById("stext7").innerText=null;
      }
  }
}