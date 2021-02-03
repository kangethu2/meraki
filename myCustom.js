    $('#btn_personal_details').click(function(){
    var error_first_name = '';
    var error_last_name = '';
    
    if($.trim($('#first_name').val()).length == 0)
    {
     error_first_name = 'First Name is required';
     $('#error_first_name').text(error_first_name);
     $('#first_name').addClass('has-error');
    }
    else
    {
     error_first_name = '';
     $('#error_first_name').text(error_first_name);
     $('#first_name').removeClass('has-error');
    }
    
    if($.trim($('#last_name').val()).length == 0)
    {
     error_last_name = 'Last Name is required';
     $('#error_last_name').text(error_last_name);
     $('#last_name').addClass('has-error');
    }
    else
    {
     error_last_name = '';
     $('#error_last_name').text(error_last_name);
     $('#last_name').removeClass('has-error');
    }
  
    if(error_first_name != '' || error_last_name != '')
    {
     return false;
    }
    else
    {
     $('#list_personal_details').removeClass('active active_tab1');
     $('#list_personal_details').removeAttr('href data-toggle');
     $('#personal_details').removeClass('active');
     $('#list_personal_details').addClass('inactive_tab1');
     $('#list_contact_details').removeClass('inactive_tab1');
     $('#list_contact_details').addClass('active_tab1 active');
     $('#list_contact_details').attr('href', '#contact_details');
     $('#list_contact_details').attr('data-toggle', 'tab');
     $('#contact_details').addClass('active in');
    }
   });
   
   $('#previous_btn_contact_details').click(function(){
    $('#list_contact_details').removeClass('active active_tab1');
    $('#list_contact_details').removeAttr('href data-toggle');
    $('#contact_details').removeClass('active in');
    $('#list_contact_details').addClass('inactive_tab1');
    $('#list_personal_details').removeClass('inactive_tab1');
    $('#list_personal_details').addClass('active_tab1 active');
    $('#list_personal_details').attr('href', '#personal_details');
    $('#list_personal_details').attr('data-toggle', 'tab');
    $('#personal_details').addClass('active in');
   });
   
  $(document).ready(function(){
   
   $('#btn_contact_details').click(function(){
    
    var error_email1 = '';
    var error_mobile_no = '';
    var mobile_validation = /^\d{10}$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if($.trim($('#email1').val()).length == 0)
    {
     error_email1 = 'Email is required';
     $('#error_email1').text(error_email1);
     $('#email1').addClass('has-error');
    }
    else
    {
     if (!filter.test($('#email1').val()))
     {
      error_email1 = 'Invalid Email';
      $('#error_email1').text(error_email1);
      $('#email1').addClass('has-error');
     }
     else
     {
      error_email1 = '';
      $('#error_email1').text(error_email1);
      $('#email1').removeClass('has-error');
     }
    }

    if($.trim($('#mobile_no').val()).length == 0)
    {
     error_mobile_no = 'Mobile Number is required';
     $('#error_mobile_no').text(error_mobile_no);
     $('#mobile_no').addClass('has-error');
    }
    else
    {
     if (!mobile_validation.test($('#mobile_no').val()))
     {
      error_mobile_no = 'Invalid Mobile Number';
      $('#error_mobile_no').text(error_mobile_no);
      $('#mobile_no').addClass('has-error');
     }
     else
     {
      error_mobile_no = '';
      $('#error_mobile_no').text(error_mobile_no);
      $('#mobile_no').removeClass('has-error');
     }
    }
  
    if(error_email1 != '' || error_mobile_no != '')
    {
     return false;
    }
    else
    {
     $('#list_contact_details').removeClass('active active_tab1');
     $('#list_contact_details').removeAttr('href data-toggle');
     $('#contact_details').removeClass('active');
     $('#list_contact_details').addClass('inactive_tab1');
     $('#list_product_details').removeClass('inactive_tab1');
     $('#list_product_details').addClass('active_tab1 active');
     $('#list_product_details').attr('href', '#product_details');
     $('#list_product_details').attr('data-toggle', 'tab');
     $('#product_details').addClass('active in');
    }
   });
   
   $('#previous_btn_product_details').click(function(){
    $('#list_product_details').removeClass('active active_tab1');
    $('#list_product_details').removeAttr('href data-toggle');
    $('#product_details').removeClass('active in');
    $('#list_product_details').addClass('inactive_tab1');
    $('#list_contact_details').removeClass('inactive_tab1');
    $('#list_contact_details').addClass('active_tab1 active');
    $('#list_contact_details').attr('href', '#contact_details');
    $('#list_contact_details').attr('data-toggle', 'tab');
    $('#contact_details').addClass('active in');
   });
   

   $('#btn_product_details').click(function(){
    
    var error_product1 = '';
    var error_product2 = '';
    
    if($.trim($('#product1').val()).length == 0)
    {
     error_product1 = 'Product is required';
     $('#error_product1').text(error_product1);
     $('#product1').addClass('has-error');
    }
    else
    {
     {
      error_product1 = '';
      $('#error_product1').text(error_product1);
      $('#product1').removeClass('has-error');
     }
    }
    
    if($.trim($('#location').val()).length == 0)
    {
     error_location = 'Location is required';
     $('#error_location').text(error_location);
     $('#location').addClass('has-error');
    }
    else
    {
     error_product2 = '';
     $('#error_location').text(error_location);
     $('#location').removeClass('has-error');
    }
  
    if(error_product1 != '' || error_location != '')
    {
     return false;
    }
    else
    {
     $('#btn_product_details').attr("disabled", "disabled");
     $(document).css('cursor', 'prgress');
     $("#register_form").submit();
    }
    
   });
   
  });

      $(function () {
  
        $('form').on('submit', function (e) {
          e.preventDefault();
  
          $.ajax({
            type: 'post',
            url: 'lead_insert.php',
            data: $('form').serialize(),
            success: function () {
                      Swal.fire(
                'Thank You!',
                'We will contact you!',
                'success'
              );
            }
          });
  
        });
  
      });
  