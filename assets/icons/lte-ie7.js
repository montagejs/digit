/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-arrow-left' : '&#xe000;',
			'icon-arrow-down' : '&#xe001;',
			'icon-arrow-up' : '&#xe002;',
			'icon-arrow-right' : '&#xe003;',
			'icon-ellipsis' : '&#xe004;',
			'icon-pictures' : '&#xe005;',
			'icon-video' : '&#xe006;',
			'icon-music' : '&#xe007;',
			'icon-rocket' : '&#xe008;',
			'icon-camera' : '&#xe009;',
			'icon-checkmark' : '&#xe00a;',
			'icon-cross' : '&#xe00b;',
			'icon-minus' : '&#xe00c;',
			'icon-plus' : '&#xe00d;',
			'icon-cross-2' : '&#xe00e;',
			'icon-minus-2' : '&#xe00f;',
			'icon-plus-2' : '&#xe010;',
			'icon-cross-3' : '&#xe011;',
			'icon-user-add' : '&#xe012;',
			'icon-user' : '&#xe013;',
			'icon-erase' : '&#xe014;',
			'icon-cog' : '&#xe015;',
			'icon-export' : '&#xe016;'
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