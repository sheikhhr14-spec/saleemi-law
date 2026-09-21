
document.addEventListener('DOMContentLoaded',function(){
  var y=document.getElementById('yr'); if(y) y.textContent=new Date().getFullYear();
  var f=document.querySelector('form.cf');
  if(f){f.addEventListener('submit',function(e){
    e.preventDefault();
    var n=document.getElementById('name').value, em=document.getElementById('email').value, m=document.getElementById('message').value;
    window.location.href='mailto:' + FORM_EMAIL + '?subject=Website inquiry from '+encodeURIComponent(n)+'&body='+encodeURIComponent(m)+'%0A%0AReply to: '+encodeURIComponent(em);
  });}
});
