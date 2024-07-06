
    $(document).ready(function() {
    // Function to animate the counting
    function animateCount(element, targetNumber) {
        $({ count: 0 }).animate({ count: targetNumber }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $(element).text(Math.floor(this.count) + ' +');
            },
            complete: function() {
                $(element).text(this.count + ' +');
            }
        });
    }

    // Trigger the animation when the element is visible in the viewport
    function triggerAnimation() {
    $('.item').each(function() {
    var element = $(this).find('.number');
    var targetNumber = $(this).data('number');

    if (isElementInViewport(this) && !$(this).hasClass('animated')) {
    $(this).addClass('animated');
    animateCount(element, targetNumber);
}
});
}

    // Check if the element is in the viewport
    function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

    // Trigger animation on page load and on scroll
    $(window).on('scroll', triggerAnimation);
    triggerAnimation();
});

