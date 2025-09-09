# Public Assets

Esta carpeta contiene assets estáticos que se sirven directamente desde la raíz del dominio.

## Estructura

- `images/` - Imágenes del proyecto (logos, ilustraciones, etc.)
- `icons/` - Iconos e imágenes pequeñas
- `fonts/` - Fuentes personalizadas (si no se usan desde CDN)

## Uso

Los archivos en esta carpeta se acceden desde la raíz:
```typescript
// ✅ Referenciar assets desde /public
<Image src="/images/logo.png" alt="Logo" />
<link rel="icon" href="/icons/favicon.ico" />
```

## Optimización

- Usar `next/image` para optimización automática
- Comprimir imágenes antes de subirlas
- Usar formatos modernos (WebP, AVIF) cuando sea posible
- Considerar CDN para assets grandes
