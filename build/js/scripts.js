function open_img1(){$.fancybox.open([{src:"https://c1.staticflickr.com/9/8148/29324593462_abebaddc38_k.jpg",opts:{caption:"First caption",thumb:"https://c1.staticflickr.com/9/8148/29324593462_f890687b7a_m.jpg"}},{src:"https://c2.staticflickr.com/6/5499/30972532232_051e1dc57e_h.jpg",opts:{caption:"Second caption",thumb:"https://c2.staticflickr.com/6/5499/30972532232_e9a298a0c5_m.jpg"}}],{loop:!1})}function openModal(){document.getElementById("myModal").style.display="block"}function closeModal(){document.getElementById("myModal").style.display="none"}function plusSlides(e){showSlides(slideIndex+=e)}function currentSlide(e){showSlides(slideIndex=e)}function showSlides(e){var t,s=document.getElementsByClassName("mySlides"),l=document.getElementsByClassName("demo"),n=document.getElementById("caption");for(e>s.length&&(slideIndex=1),e<1&&(slideIndex=s.length),t=0;t<s.length;t++)s[t].style.display="none";for(t=0;t<l.length;t++)l[t].className=l[t].className.replace(" active","");s[slideIndex-1].style.display="block",l[slideIndex-1].className+=" active",n.innerHTML=l[slideIndex-1].alt}var slideIndex=1;showSlides(slideIndex);