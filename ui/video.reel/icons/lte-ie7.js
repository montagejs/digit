/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-play' : '&#xe101;',
			'icon-pause' : '&#xe102;',
			'icon-cw' : '&#xe103;',
			'icon-ccw' : '&#xe104;',
			'icon-arrow-left' : '&#xe105;',
			'icon-arrow-right' : '&#xe106;',
			'icon-resize-enlarge' : '&#xe107;',
			'icon-resize-shrink' : '&#xe108;',
			'icon-volume' : '&#xe109;',
			'icon-sound' : '&#xe10a;',
			'icon-mute' : '&#xe10b;',
			'icon-ellipsis' : '&#xe10c;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};