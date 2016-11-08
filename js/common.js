//  slick

jQuery(document).ready(function(){

	jQuery('#slider').slick({
		infinite: true,
		dots: false,
		slidesToShow: 1,
		centerMode: true, //�v�f�𒆉���
		centerPadding: '0px', //���T�C�h�̌����Ă��镔���̃T�C�Y
		autoplay: true, //�����Đ�
		responsive: [{
			breakpoint: 300,
				settings: {
					centerMode: false,
			}
		}]

	});

});

$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});