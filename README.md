ImageOnHover
============

ImageOnHover is jQuery plugin that help you to show image on hovering a link.
It's just like fancybox or something like that, except you don't need to click.

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

`childrenClass` - defines class of children element. Position of start place for animation depends on it. If there's no element with this class in <a.class> then <a> became a thing. (Default: "hi182childContainer")

`animationTime` - time of animation in ms (Default: 200)

`maxOpacity` - maximum opacity on the end of animation (Default: 1)

