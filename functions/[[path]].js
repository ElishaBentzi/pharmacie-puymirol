// Redirect 301 de los dominios secundarios al dominio principal (canónico).
// Se ejecuta antes de servir los assets estáticos (patrón Pages Functions).
const PRIMARY = 'pharmacie-puymirol.com';

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (url.hostname !== PRIMARY) {
    const target = new URL(request.url);
    target.hostname = PRIMARY;
    return Response.redirect(target.toString(), 301);
  }

  return next();
}
