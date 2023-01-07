// alert('Hallo... Selamat datang di BlogHungry');
// alert('Menyajikan mengenai informasi seputar sistem informasi dan portofolio penulis');

$(document).ready(function(){
    $('input[type="radio"]').change(function(){
        if(this.value == 'gopay'){
            $('#cara-gopay').css('display','block');
        }
        else if (this.value == 'shopeepay'){
            $('#cara-shopeepay').css('display','block');
            // console.log('shopee');
        }
        else if (this.value == 'indomaret'){
            $('#cara-indomaret').css('display','block');
        }
        else{
            $('#cara-gopay').css('display','none');
        }
    });
});


(function() {
    var qr = new QRious({
      element: document.getElementById('qr-Invoice'),
      value: 'https://github.com/neocotic/qrious',
     
    });
  })();

  $('kembali').click(function(){
    window.location.href='the_link_to_go_to.html';
 })


  function tampilkan(){
 
    var pembayaran = document.getElementById("form1").value;
    if (pembayaran = 'gopay'){
        location.href = 'confirm-gopay.html'
    }
    else if(pembayaran ='shopeepay'){
        location.href = 'confirm-shopeepay.html'

    }
  }

//   function submitdata(){
//      var metode = document.getElementById("form1").value;
//      if(metode = "gojek"){
//         alert(metode);
//      }
//      else if(metode = "shopee"){
//         alert(metode);
//      }

 



//   }

 