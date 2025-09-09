# Guía de Flujo de Trabajo con ChatModes

## Introducción

Los ChatModes son agentes especializados basados en el BMad Method que transforman GitHub Copilot en diferentes personas con roles específicos del desarrollo de software. Cada agente tiene su propia personalidad, herramientas y flujos de trabajo optimizados para tareas específicas.

## Agentes Disponibles

### 🎭 BMad Orchestrator
**Archivo**: `bmad-orchestrator.chatmode.md`
**Descripción**: Maestro coordinador y experto en BMad Method
**Cuándo usar**: 
- Coordinación de flujos de trabajo
- Tareas multi-agente
- Orientación para cambio de roles
- Cuando no estés seguro de qué especialista consultar

**Características**:
- Interfaz unificada a todas las capacidades BMad-Method
- Se transforma dinámicamente en cualquier agente especializado
- Maneja comandos que empiezan con `*` (ej: `*help`, `*agent`, `*workflow`)

### 👩‍💼 Sarah - Product Owner
**Archivo**: `po.chatmode.md`
**Descripción**: Especialista en gestión de producto y requisitos
**Cuándo usar**:
- Definición de requisitos
- Creación de user stories
- Planificación de producto
- Gestión de backlog

**Características**:
- Enfoque en valor de negocio
- Comunicación con stakeholders
- Priorización de funcionalidades

### 🏃‍♂️ Bob - Scrum Master
**Archivo**: `sm.chatmode.md`
**Descripción**: Facilitador de procesos Agile/Scrum
**Cuándo usar**:
- Planificación de sprints
- Facilitación de ceremonias
- Resolución de impedimentos
- Mejora de procesos

**Características**:
- Facilita la colaboración del equipo
- Mantiene el flujo de trabajo
- Enfoque en metodología Agile

### 👨‍💻 Developer
**Archivo**: `dev.chatmode.md`
**Descripción**: Desarrollador Full Stack especializado
**Cuándo usar**:
- Implementación de código
- Resolución de problemas técnicos
- Revisión de arquitectura
- Ejecución de tareas de desarrollo

**Características**:
- Ejecución precisa de tareas de desarrollo
- Actualización de secciones Dev Agent Record
- Mantenimiento de contexto mínimo
- Opciones numeradas para elecciones

### 🧪 Quinn - Test Architect & QA
**Archivo**: `qa.chatmode.md`
**Descripción**: Arquitecto de pruebas y asesor de calidad
**Cuándo usar**:
- Diseño de estrategias de testing
- Creación de casos de prueba
- Revisión de calidad
- Validación de funcionalidades

**Características**:
- Actualizaciones limitadas a sección QA Results
- Enfoque en calidad y testing
- Revisión exhaustiva de código

## Flujo de Trabajo Recomendado

### 1. Inicio de Proyecto
```
🎭 BMad Orchestrator → 👩‍💼 Sarah (PO)
```
- Comenzar con el Orchestrator para evaluación inicial
- Cambiar a Sarah para definir requisitos y stories
- Crear PRD y documentación de producto

### 2. Planificación de Sprint
```
👩‍💼 Sarah (PO) → 🏃‍♂️ Bob (SM)
```
- Sarah define y prioriza el backlog
- Bob facilita la planificación del sprint
- Estimación y asignación de tareas

### 3. Desarrollo
```
🏃‍♂️ Bob (SM) → 👨‍💻 Developer
```
- Bob coordina el inicio del desarrollo
- Developer implementa las funcionalidades
- Seguimiento de progreso y resolución de impedimentos

### 4. Testing y QA
```
👨‍💻 Developer → 🧪 Quinn (QA)
```
- Developer completa la implementación
- Quinn revisa calidad y crea pruebas
- Validación de criterios de aceptación

### 5. Review y Retrospectiva
```
🧪 Quinn (QA) → 🏃‍♂️ Bob (SM) → 🎭 BMad Orchestrator
```
- Quinn valida la calidad final
- Bob facilita review y retrospectiva
- Orchestrator coordina siguiente ciclo

## Comandos Principales

### Comandos del Orchestrator
Todos los comandos requieren prefijo `*`:

- `*help` - Mostrar guía de comandos disponibles
- `*agent [nombre]` - Transformarse en agente especializado
- `*chat-mode` - Iniciar modo conversacional
- `*status` - Mostrar contexto actual y progreso
- `*workflow [nombre]` - Iniciar flujo de trabajo específico
- `*task [nombre]` - Ejecutar tarea específica
- `*exit` - Salir del modo actual

### Comandos de Agentes
- `*help` - Ayuda específica del agente
- `*exit` - Salir del modo agente actual
- Comandos específicos según el rol del agente

## Mejores Prácticas

### Activación de Agentes
1. **Leer configuración completa**: Cada agente lee su configuración YAML completa
2. **Adoptar persona**: Cambiar completamente al rol específico
3. **Cargar configuración del proyecto**: Leer `bmad-core/core-config.yaml`
4. **Saludar y mostrar ayuda**: Presentarse y ejecutar `*help` automáticamente
5. **Mantenerse en el personaje**: No salir del rol hasta recibir `*exit`

### Gestión de Recursos
- **Carga bajo demanda**: Solo cargar archivos cuando sean necesarios
- **Dependencias específicas**: Cada agente tiene sus propias dependencias
- **No pre-cargar**: Evitar cargar recursos innecesariamente
- **Resolución de archivos**: `dependencies → .bmad-core/{type}/{name}`

### Interacción con Usuarios
- **Listas numeradas**: Siempre presentar opciones como listas numeradas
- **Confirmaciones**: Respetar configuraciones de confirmación
- **Contexto claro**: Mantener contexto específico del agente activo
- **Comandos explícitos**: Recordar el uso del prefijo `*` para comandos

## Configuración de Herramientas

Cada agente tiene acceso a herramientas específicas:

```yaml
tools: [
  'changes', 'codebase', 'fetch', 'findTestFiles', 
  'githubRepo', 'problems', 'usages', 'editFiles', 
  'runCommands', 'runTasks', 'runTests', 'search', 
  'searchResults', 'terminalLastCommand', 
  'terminalSelection', 'testFailure'
]
```

## Ejemplo de Sesión Típica

```
1. Usuario activa BMad Orchestrator
   💬 "¡Hola! Soy el BMad Orchestrator. Puedo coordinar agentes y flujos de trabajo."
   📋 [Auto-ejecuta *help mostrando agentes disponibles]

2. Usuario solicita: "Necesito crear una nueva funcionalidad"
   🎭 "Te recomiendo empezar con *agent po para definir requisitos"

3. Usuario ejecuta: "*agent po"
   👩‍💼 "¡Hola! Soy Sarah, tu Product Owner. ¿Qué funcionalidad necesitas definir?"

4. Usuario define requisitos con Sarah
   👩‍💼 "Perfecto, ahora necesitas un developer. Ejecuta *exit y luego *agent dev"

5. Usuario cambia: "*exit" → "*agent dev"
   👨‍💻 "Soy tu Developer. ¿Qué story necesitas que implemente?"
```

## Estructura de Archivos

```
.github/chatmodes/
├── bmad-orchestrator.chatmode.md  # 🎭 Coordinador maestro
├── po.chatmode.md                 # 👩‍💼 Product Owner (Sarah)
├── sm.chatmode.md                 # 🏃‍♂️ Scrum Master (Bob)  
├── dev.chatmode.md                # 👨‍💻 Developer
└── qa.chatmode.md                 # 🧪 QA Architect (Quinn)
```

## Resolución de Problemas

### Problema: Agente no responde correctamente
**Solución**: Verificar que se ejecutó la activación completa:
1. Leer archivo completo
2. Adoptar persona
3. Cargar configuración del proyecto
4. Ejecutar `*help`

### Problema: Comandos no funcionan
**Solución**: Recordar usar el prefijo `*` para todos los comandos del Orchestrator

### Problema: Agente carga archivos incorrectos
**Solución**: Los agentes solo deben cargar:
- Configuración del proyecto en activación
- Archivos de dependencias cuando el usuario los solicite explícitamente

### Problema: Transición entre agentes no funciona
**Solución**: Usar `*exit` para salir del agente actual antes de activar uno nuevo

## Integración con BMad Method

Los ChatModes están completamente integrados con el BMad Method:

- **Configuración del proyecto**: `bmad-core/core-config.yaml`
- **Tareas estructuradas**: `.bmad-core/tasks/`
- **Plantillas**: `.bmad-core/templates/`
- **Checklists**: `.bmad-core/checklists/`
- **Datos**: `.bmad-core/data/`
- **Utilidades**: `.bmad-core/utils/`

## Conclusión

Los ChatModes proporcionan un flujo de trabajo estructurado y eficiente para el desarrollo de software, permitiendo que GitHub Copilot actúe como diferentes especialistas según las necesidades del proyecto. La clave del éxito está en usar el agente correcto para cada fase del desarrollo y mantener las transiciones claras entre roles.

Para mayor información sobre el BMad Method, consulta la documentación oficial del framework.
