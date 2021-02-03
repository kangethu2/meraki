    $('#btn_personal_details').click(function () {
      var error_first_name = '';
      var error_last_name = '';

      if ($.trim($('#first_name').val()).length == 0) {
        error_first_name = 'First Name is required';
        $('#error_first_name').text(error_first_name);
        $('#first_name').addClass('has-error');
      } else {
        error_first_name = '';
        $('#error_first_name').text(error_first_name);
        $('#first_name').removeClass('has-error');
      }

      if ($.trim($('#last_name').val()).length == 0) {
        error_last_name = 'Last Name is required';
        $('#error_last_name').text(error_last_name);
        $('#last_name').addClass('has-error');
      } else {
        error_last_name = '';
        $('#error_last_name').text(error_last_name);
        $('#last_name').removeClass('has-error');
      }

      if (error_first_name != '' || error_last_name != '') {
        return false;
      } else {
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

    $('#previous_btn_contact_details').click(function () {
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

    $(document).ready(function () {

      $('#btn_contact_details').click(function () {

        var error_email_address = '';
        var error_mobile_no = '';
        var mobile_validation = /^\d{10}$/;
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if ($.trim($('#email_address').val()).length == 0) {
          error_email_address = 'Email is required';
          $('#error_email_address').text(error_email_address);
          $('#email_address').addClass('has-error');
        } else {
          if (!filter.test($('#email_address').val())) {
            error_email_address = 'Invalid Email';
            $('#error_email_address').text(error_email_address);
            $('#email_address').addClass('has-error');
          } else {
            error_email_address = '';
            $('#error_email_address').text(error_email_address);
            $('#email_address').removeClass('has-error');
          }
        }

        if ($.trim($('#mobile_no').val()).length == 0) {
          error_mobile_no = 'Mobile Number is required';
          $('#error_mobile_no').text(error_mobile_no);
          $('#mobile_no').addClass('has-error');
        } else {
          if (!mobile_validation.test($('#mobile_no').val())) {
            error_mobile_no = 'Invalid Mobile Number';
            $('#error_mobile_no').text(error_mobile_no);
            $('#mobile_no').addClass('has-error');
          } else {
            error_mobile_no = '';
            $('#error_mobile_no').text(error_mobile_no);
            $('#mobile_no').removeClass('has-error');
          }
        }

        if (error_email_address != '' || error_mobile_no != '') {
          return false;
        } else {
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

      $('#previous_btn_product_details').click(function () {
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


      $('#btn_product_details').click(function () {

        var error_product = '';
        var error_product = '';

        if ($.trim($('#product').val()).length == 0) {
          error_product = 'Approximate value is required';
          $('#error_product').text(error_product);
          $('#product').addClass('has-error');
        } else {
          {
            error_product = '';
            $('#error_product').text(error_product);
            $('#product').removeClass('has-error');
          }
        }

        if ($.trim($('#location').val()).length == 0) {
          error_location = 'Location is required';
          $('#error_location').text(error_location);
          $('#location').addClass('has-error');
        } else {
          error_location = '';
          $('#error_location').text(error_location);
          $('#location').removeClass('has-error');
        }

        if (error_product != '' || error_location != '') {
          return false;
        } else {
          //$('#btn_product_details').attr("disabled", "disabled");
          //  $(document).css('cursor', 'prgress');
          //   $("##general_form").submit();
          $.ajax({
            type: 'POST',
            data: $('#general_form').serialize(),
            url: 'lead_insert.php',
            success: function () {
              Swal.fire(
                'Thank You!',
                'We will contact you!',
                'success'
              );
            }
          });
        }
      });
    });


    // $(function () {
    //   $('#general_form').on('hidden.bs.modal', function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //       type: 'POST',
    //       url: 'lead_insert.php',
    //       data: $('#general_form').serialize(),
    //       success: function () {
    //                 Swal.fire(
    //           'Thank You!',
    //           'We will contact you!',
    //           'success'
    //         );
    //       }
    //     });
    //   });
    // });




    //   $('.insert').on('click',function(){
    //     setTimeout(function(){
    //       $("#getquote-general").removeClass('fade').modal('hide');
    //       $("#getquote-general").empty();
    //     }, 4000);
    // });