import{j as e}from"./index-DmJHRE57.js";import{L as a}from"./LegalDocumentPage-kZgdQK6j.js";import"./BlogPostMarkdown-D8mHNCXH.js";import"./index-SjtzEJih.js";const n=`# Política de Privacidad de Copero

**Última actualización:** 23 de abril de 2026

Esta Política de Privacidad describe cómo Copero recopila, utiliza y protege la información personal vinculada al uso de la plataforma. Su alcance cubre el sitio web, las cuentas de usuario, la autenticación, las preferencias guardadas y las comunicaciones transaccionales de seguridad.

En la República Argentina, el tratamiento de datos personales se encuentra alcanzado por la Ley N° 25.326 de Protección de los Datos Personales, su reglamentación y las normas complementarias dictadas por la Agencia de Acceso a la Información Pública (AAIP), autoridad de aplicación y control en la materia.

## 1. Datos que recopilamos

Copero recopila únicamente la información necesaria para operar el servicio y habilitar las funciones personalizadas disponibles para usuarios registrados.

### 1.1 Datos proporcionados por el usuario

Cuando una persona se registra con email y contraseña, Copero almacena su dirección de correo electrónico como identificador de cuenta y una representación hasheada de la contraseña. La contraseña no se almacena en texto plano. Cuando el usuario completa o modifica información de perfil, también pueden almacenarse campos como nombre visible, biografía corta y URL de avatar.

Cuando una persona utiliza Google OAuth, Copero recibe de Google la información mínima necesaria para autenticar la cuenta, que puede incluir email, nombre y URL de avatar. En estos casos, el servicio utiliza esos datos para crear o vincular la cuenta correspondiente.

### 1.2 Datos generados por el uso del servicio

Copero almacena datos funcionales asociados al uso de la cuenta, incluyendo equipos favoritos, sesiones de refresh para autenticación persistente, eventos de verificación por email, sesiones de recuperación de contraseña y metadatos técnicos básicos necesarios para mantener la seguridad de la cuenta.

### 1.3 Datos editoriales y de navegación

El sitio también puede exponer artículos del blog y contenido estadístico o predictivo sin requerir registro. En esos casos, la navegación pública no está orientada a publicidad comportamental ni a perfilado comercial de usuarios.

## 2. Finalidades del tratamiento

Copero utiliza la información recopilada para finalidades legítimas y operativas directamente relacionadas con el funcionamiento de la plataforma.

### 2.1 Autenticación y seguridad

Los datos de cuenta se utilizan para identificar al usuario, iniciar sesión, mantener sesiones activas, verificar email, restablecer contraseñas, revocar sesiones cuando corresponde y proteger el acceso a funciones privadas del sitio.

### 2.2 Personalización del servicio

Las preferencias del usuario, como equipos favoritos, se utilizan para personalizar componentes del producto, por ejemplo el ticker o determinadas vistas priorizadas por afinidad deportiva.

### 2.3 Comunicaciones transaccionales

Copero puede enviar correos electrónicos transaccionales vinculados a la seguridad de la cuenta, como códigos OTP de verificación, enlaces de recuperación de contraseña y otros avisos indispensables para la operación normal del servicio.

### 2.4 Operación, mantenimiento y mejora

Cierta información técnica y de uso puede emplearse para depurar errores, investigar incidentes de seguridad, mantener la integridad del sistema y mejorar la estabilidad general de la plataforma.

## 3. Cookies y almacenamiento en el navegador

Copero utiliza cookies y otras tecnologías de almacenamiento local estrictamente funcionales.

### 3.1 Cookies técnicas

La plataforma utiliza la cookie \`refresh_token\` para mantener la sesión autenticada de forma segura. Esta cookie se configura como \`HttpOnly\` y \`SameSite=Strict\`, y en entornos de producción también se marca como \`Secure\`. Su finalidad es exclusivamente técnica y de seguridad.

### 3.2 Almacenamiento local y de sesión

Además de cookies, el frontend puede utilizar \`localStorage\` para recordar preferencias no sensibles, como el tema visual del sitio, y \`sessionStorage\` para estados temporales de autenticación o experiencia de usuario, por ejemplo sesiones de verificación pendientes o caché transitoria de avatar. Estos mecanismos no se utilizan con fines publicitarios ni de perfilado comercial.

## 4. Base de tratamiento y minimización

Copero aplica un criterio de minimización de datos: solo trata la información necesaria para prestar el servicio, proteger las cuentas y ofrecer personalización básica. No vende datos personales ni utiliza la información de cuenta para campañas publicitarias de terceros.

Cuando el tratamiento requiera consentimiento, Copero entiende que este surge de la interacción voluntaria del usuario con los formularios, mecanismos de autenticación o funcionalidades que implican el suministro de datos para la operación del servicio. En los supuestos en que la ley argentina admita otras bases de legitimación para el tratamiento, Copero podrá apoyarse en ellas en la medida correspondiente.

## 5. Proveedores y terceros

Para operar el servicio, Copero se apoya en terceros que cumplen funciones técnicas específicas.

- **Google:** autenticación delegada mediante OAuth cuando el usuario elige esa modalidad de ingreso.
- **Resend:** envío de correos electrónicos transaccionales de verificación y recuperación.
- **Infraestructura en la nube:** procesamiento, despliegue y operación técnica de partes del sistema.

Estos terceros solo intervienen en la medida necesaria para prestar su servicio técnico asociado.

## 6. Conservación y eliminación

Copero conserva los datos mientras sean necesarios para operar la cuenta, cumplir finalidades de seguridad o preservar integridad referencial de la base de datos.

Cuando un usuario solicita la baja de su cuenta desde el perfil, el sistema ejecuta una anonimización irreversible de los datos personales principales en lugar de eliminar necesariamente todas las filas relacionadas. Esta decisión técnica busca preservar relaciones históricas y consistencia de base de datos sin seguir tratando la identidad personal original.

## 7. Derechos del usuario

En la medida aplicable, el usuario puede solicitar acceso, rectificación, actualización y supresión de los datos personales asociados a su cuenta. Algunas acciones están disponibles directamente dentro del producto, como la baja de cuenta, mientras que otras pueden requerir gestión operativa adicional por parte del responsable del servicio.

La disponibilidad concreta de una funcionalidad dentro de la interfaz no implica que todos los derechos se ejerzan exclusivamente por autoservicio. Cuando una capacidad no esté expuesta en el perfil, podrá requerir atención manual o una futura ampliación del producto.

De acuerdo con la normativa argentina vigente, el titular de los datos puede ejercer sus derechos frente al responsable de la base de datos y, en caso de incumplimiento, efectuar la denuncia correspondiente ante la AAIP o promover las acciones judiciales que resulten aplicables, incluyendo la acción de habeas data cuando corresponda.

## 8. Seguridad

Copero implementa medidas técnicas razonables para proteger la información tratada. Entre ellas se incluyen el hashing de contraseñas, el uso de JWT firmados, cookies seguras para refresh de sesión, revocación de sesiones persistentes, validaciones de seguridad en flujos de autenticación y uso de TLS/HTTPS cuando el entorno lo requiere.

Ningún sistema puede garantizar seguridad absoluta, pero la plataforma procura aplicar controles consistentes con su arquitectura y nivel de riesgo.

## 9. Menores de edad

Copero no está diseñado específicamente para menores de edad ni para recopilar intencionalmente datos personales de niños. Si se detecta un uso incompatible con esta política o con la legislación aplicable, la cuenta o los datos podrán ser restringidos o eliminados según corresponda.

## 10. Cambios a esta política

Copero podrá actualizar esta Política de Privacidad para reflejar cambios técnicos, operativos o legales. Cuando ello ocurra, se actualizará la fecha de última revisión del documento y la nueva versión reemplazará a la anterior desde su publicación.

## 11. Contacto

Las solicitudes relacionadas con privacidad, datos personales o funcionamiento de la cuenta deben canalizarse a través de los medios de contacto oficiales del proyecto o del responsable operativo que publique el servicio.

Sin perjuicio de ello, en Argentina la autoridad de control en materia de protección de datos personales es la Agencia de Acceso a la Información Pública (AAIP), organismo ante el cual el titular de los datos puede formular denuncias por presuntos incumplimientos de la Ley N° 25.326.`;function c(){return e.jsx(a,{title:"Política de Privacidad",summary:"Cómo Copero recopila, usa y protege la información personal asociada al uso de la plataforma.",content:n})}export{c as default};
