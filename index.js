$(function () {
	var $smallBox = $('.smallBox'),
		 $magnifierBox = $('.magnifierBox'),
		 $mark = $('.mark'),
		 $bigBox = $('.bigBox'),
		 $bigImg = $bigBox.find('img');
	$smallBox.on('mouseenter',function () {
		$mark.css('display','block');
		$bigBox.css('display','block');
	}).on('mouseleave',function () {
		$mark.css('display','none');
		$bigBox.css('display','none');
	}).on('mousemove',function (e) {
		comtupedMark(e)
	})
	function comtupedMark(e) {
		var offsetObj = $smallBox.offset(),
			 markWidth = $mark.outerWidth(),
			 markHeight = $mark.outerHeight(),
			 smallBoxWidth = $smallBox.outerWidth(),
			 smallBoxHeight = $smallBox.outerHeight(),
			 markPageX = e.pageX,
			 markPageY = e.pageY,
			 markLeft = markPageX - offsetObj.left - markWidth/2,
			 markTop = markPageY - offsetObj.top - markHeight/2,
			 minLeft = 0,
			 minTop = 0,
			 maxLeft = smallBoxWidth - markWidth,
			 maxTop = smallBoxHeight - markHeight;
		markTop = markTop < minTop ? minTop : (markTop > maxTop ? maxTop : markTop);
		markLeft = markLeft < minLeft ? minLeft : (markLeft > maxLeft ? maxLeft : markLeft)
		$mark.css({
			top: markTop,
			left: markLeft
		});
		$bigImg.css({
			top: -markTop * 3,
			left: -markLeft * 3
		})
	}
});