# Simple Button Component Usage

## Updated Simple Button Component

The Button component is now simplified and easy to use with your exact specifications:

### Typography Properties Applied:
- **Font Family**: Inter
- **Font Weight**: 500 (Medium)
- **Font Size**: 11.14px
- **Line Height**: 16.71px
- **Letter Spacing**: 0%
- **Text Align**: Center
- **Vertical Align**: Middle
- **Text Color**: #FFFFFF

### Simple Usage Examples:

#### Basic Button
```jsx
<Button>Click Me</Button>
```

#### Button with Icon
```jsx
<Button icon={<YourIconComponent />}>
  Add Item
</Button>
```

#### Button with Image
```jsx
<Button icon={<img src="/path/to/image.png" alt="Icon" className="w-4 h-4" />}>
  Upload Image
</Button>
```

#### Button with Click Handler
```jsx
<Button onClick={() => console.log('Button clicked!')}>
  Click Handler
</Button>
```

#### Disabled Button
```jsx
<Button disabled>Disabled Button</Button>
```

#### Custom Styling
```jsx
<Button className="bg-red-500 hover:bg-red-600">
  Custom Color
</Button>
```

### Props Available:
- `children`: Button content (text, elements)
- `icon`: Icon/image component to display (always on left)
- `onClick`: Click handler function
- `disabled`: Boolean to disable the button
- `className`: Additional CSS classes for custom styling
- `...props`: Any other props passed to the button element

### Default Styling:
- Background: #4CAF4F (green)
- Hover: #45A049 (darker green)
- Focus ring: #4CAF4F
- All typography properties as specified
- Rounded corners
- Smooth transitions
- Flexbox layout for proper alignment
- Icon always appears on the left with margin
