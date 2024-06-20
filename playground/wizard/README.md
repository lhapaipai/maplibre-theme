après mise à pentatrion-design changer :

```diff
<Button
  icon
  onClick={() => setShowNavBar((s) => !s)}
  color="gray"
  variant="text"
  size="large"
-  className="[&_svg.lucide]:pr-0"
>
  <Menu className="w-6 h-6" />
</Button>
```

```
<div className="hidden md:block">
  <ResizeArea name="menu" position="right" />
</div>
```