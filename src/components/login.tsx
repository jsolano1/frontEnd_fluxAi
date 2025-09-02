import { Button } from "./ui/button";

// Íconos SVG para Google y Facebook
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.039 4.062C34.323 1.181 29.58 0 24 0C10.745 0 0 10.745 0 24s10.745 24 24 24s24-10.745 24-24c0-1.341-.128-2.65-.357-3.917z" />
    <path fill="#FF3D00" d="M6.306 14.691c-1.119 2.158-1.802 4.58-1.802 7.149c0 2.569.683 5.004 1.802 7.149l-6.012 4.658C.731 30.171 0 27.214 0 24c0-3.214.731-6.171 2.294-8.851l3.912 2.911z" />
    <path fill="#4CAF50" d="M24 48c5.584 0 10.32-1.181 14.039-4.062l-7.961-6.289c-2.119 1.885-4.902 3.039-7.961 3.039c-5.223 0-9.654-3.343-11.303-8H6.306c2.865 7.426 10.034 12.639 18.694 12.639z" />
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.135-2.231 4.04-4.242 5.333l7.961 6.289c4.895-4.407 8.017-10.74 8.017-17.722c0-1.341-.128-2.65-.357-3.917z" />
  </svg>
);

const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.675 0h-21.35C.59 0 0 .59 0 1.325v21.35C0 23.41.59 24 1.325 24H12.82V14.706h-3.414v-4.03h3.414V7.648c0-3.374 2.01-5.207 5.072-5.207 1.442 0 2.87.107 2.87.107v3.62h-2.128c-1.636 0-1.954.776-1.954 1.92v2.51h4.004l-.52 4.03h-3.484V24h5.66c.735 0 1.325-.59 1.325-1.325V1.325C24 .59 23.41 0 22.675 0z" />
    </svg>
);


const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-8 glass-strong rounded-2xl shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Accede a tu cuenta
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Usa tu proveedor preferido para continuar
          </p>
        </div>
        <div className="space-y-4">
          <Button variant="outline" className="w-full h-12 text-lg">
            <GoogleIcon />
            <span className="ml-3">Continuar con Google</span>
          </Button>
          <Button className="w-full h-12 text-lg bg-[#1877F2] hover:bg-[#166fe5] text-white">
            <FacebookIcon />
            <span className="ml-3">Continuar con Facebook</span>
          </Button>
        </div>
        <p className="text-center text-xs text-muted-foreground">
            Al continuar, aceptas nuestros Términos de Servicio y Política de Privacidad.
        </p>
      </div>
    </div>
  );
};

export default Login;