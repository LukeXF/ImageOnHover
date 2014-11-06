ImageOnHover
============

ImageOnHover is jQuery plugin that help you to show image on hovering a link.
It's just like fancybox or something like that, except you don't need to click.

### View a working example [over here](http://demo.luke.sx/ImageOnHover/).
Be aware: example.html is **NOT SAFE FOR WORK**.

---

### Example:

#### HTML:
```
<div style="width:300px; margin:0 auto; margin-top:300px;">
	<a href="https://pp.vk.me/c310820/v310820136/5a60/TXklH5r2qNY.jpg" class="addHover">
		<div class="hi182childContainer" style="height:40px; width:80px; display:block;">HOVER ME</div>
	</a>
</div>
```

#### JS:
```
$('a.class').imageOnHover();
```

###Options:

`zIndex` - defines z-index of overlay with image. (Default: 1000)

`maxWidth` - defines maximum available width for overlay. (Default: "90%")

`maxHeight` - maximum height of overlay. (Default: "90%")

`childrenClass` - defines class of children element. Position of start place for animation depends on it. If there's no element with this class in `<a.class>` then `<a>` itself become a thing. (Default: "hi182childContainer")

`timeZoomIn` - time of zoom in animation in ms (Default: 200)

`timeZoomOut` - time of zoom out animation in ms (Default: 100) (Use 0 for better perfomance and to avoid bugs)

`maxOpacity` - maximum opacity in the end of animation (Default: 1)

