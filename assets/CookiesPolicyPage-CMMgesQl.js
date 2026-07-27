import{j as e}from"./index-DmJHRE57.js";import{L as a}from"./LegalDocumentPage-kZgdQK6j.js";import"./BlogPostMarkdown-D8mHNCXH.js";import"./index-SjtzEJih.js";const n=`# Política de Cookies y Almacenamiento Local de Copero

**Última actualización:** 23 de abril de 2026

Esta política describe el uso de cookies y tecnologías de almacenamiento local en Copero. Su objetivo es explicar de forma transparente qué mecanismos se utilizan en el navegador, para qué sirven y qué impacto tienen en la experiencia del usuario.

En la República Argentina, el eventual tratamiento de datos personales asociado a cookies, \`localStorage\`, \`sessionStorage\` u otras tecnologías equivalentes se encuentra alcanzado, en lo pertinente, por la Ley N° 25.326 de Protección de los Datos Personales, su reglamentación y las normas complementarias dictadas por la Agencia de Acceso a la Información Pública (AAIP).

## 1. Qué son las cookies y tecnologías similares

Las cookies son pequeños archivos de texto que un sitio web guarda en el navegador. También existen otras tecnologías similares, como \`localStorage\` y \`sessionStorage\`, que permiten conservar información en el navegador con fines técnicos o funcionales.

En Copero, estos mecanismos se utilizan principalmente para autenticación, continuidad de sesión, preferencias de interfaz y estados temporales del producto.

## 2. Principios de uso en Copero

Copero sigue un criterio de minimización y privacidad por diseño. La plataforma no utiliza cookies de marketing, remarketing ni seguimiento publicitario de terceros para perfilar usuarios con fines comerciales.

Las tecnologías de almacenamiento utilizadas son funcionales, técnicas o estrictamente necesarias para operar determinadas partes del sitio.

## 3. Cookies utilizadas

### 3.1 \`refresh_token\`

Copero utiliza una cookie denominada \`refresh_token\` para sostener la sesión autenticada de forma segura entre requests.

- **Finalidad:** renovar la sesión del usuario sin exponer el token de refresh al código JavaScript del frontend.
- **Tipo:** cookie técnica esencial.
- **Atributos de seguridad:** \`HttpOnly\`, \`SameSite=Strict\` y \`Secure\` en producción.
- **Duración:** persistente por un período definido por el servidor. En la implementación actual, se utiliza una duración aproximada de hasta 7 días salvo revocación o cierre de sesión previo.

Esta cookie es indispensable para determinadas funciones de autenticación y no puede desactivarse sin afectar la posibilidad de mantener una sesión iniciada.

## 4. Tecnologías de almacenamiento local

Además de cookies, Copero utiliza almacenamiento del navegador para finalidades limitadas y no publicitarias.

### 4.1 \`localStorage\`

Copero puede utilizar \`localStorage\` para recordar preferencias de experiencia de usuario que no son sensibles, por ejemplo la selección de tema visual del sitio. Esta información mejora la continuidad de la interfaz entre visitas, pero no se usa para publicidad ni venta de datos.

### 4.2 \`sessionStorage\`

Copero puede utilizar \`sessionStorage\` para estados temporales de navegación y autenticación, como sesiones pendientes de verificación por email o cachés transitorias ligadas a la experiencia del usuario dentro de una pestaña activa. Su alcance es funcional y normalmente permanece limitado a la sesión de navegación correspondiente.

## 5. Qué no utiliza Copero

Copero no declara, en la implementación actual, el uso de:

- cookies de publicidad conductual
- cookies de remarketing
- cookies de analítica comercial de terceros orientadas a perfilado individual
- tecnologías de monetización basadas en rastreo intersitio

Si en el futuro se incorporaran herramientas de este tipo, esta política deberá actualizarse antes o al momento de su entrada en funcionamiento.

## 6. Gestión por parte del usuario

El usuario puede borrar cookies o almacenamiento local desde la configuración de su navegador. Sin embargo, al hacerlo, ciertas funciones del sitio pueden dejar de operar correctamente, especialmente aquellas relacionadas con autenticación, continuidad de sesión o preferencias guardadas.

En particular, eliminar la cookie \`refresh_token\` implica la pérdida de la sesión persistente y puede requerir un nuevo inicio de sesión.

## 7. Consentimiento y base funcional

Las cookies y tecnologías descritas en esta política cumplen una finalidad técnica o funcional necesaria para el servicio. Cuando su uso sea estrictamente esencial para autenticación o seguridad, su desactivación puede impedir el funcionamiento correcto de partes de la plataforma.

Cuando alguna de estas tecnologías permita asociar información a una persona identificada o identificable, Copero procurará tratarlas de conformidad con los principios de finalidad, proporcionalidad, seguridad y minimización aplicables al tratamiento de datos personales.

## 8. Cambios a esta política

Copero podrá actualizar esta Política de Cookies y Almacenamiento Local cuando cambie la arquitectura del frontend, la estrategia de autenticación o el uso de tecnologías en el navegador. La versión publicada más reciente reemplazará a las anteriores desde su actualización.

## 9. Contacto

Las consultas relacionadas con el uso de cookies o almacenamiento en el navegador deben dirigirse a los canales oficiales de contacto del proyecto o del responsable operativo del servicio.

En Argentina, las consultas o reclamos vinculados con datos personales también pueden involucrar a la Agencia de Acceso a la Información Pública (AAIP) como autoridad de control competente.`;function t(){return e.jsx(a,{title:"Política de Cookies y Almacenamiento Local",summary:"Qué tecnologías de almacenamiento utiliza Copero, para qué se usan y cómo impactan en la experiencia.",content:n})}export{t as default};
