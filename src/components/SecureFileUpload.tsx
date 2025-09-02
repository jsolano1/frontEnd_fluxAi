import { UploadCloud, FileCheck2, ShieldCheck } from "lucide-react";

const SecureFileUpload = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background p-8">
      <div className="w-full max-w-4xl text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Tu Espacio Seguro en la Nube
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
            Sube tus documentos para que sean analizados por nuestro agente de IA. Tu información es procesada con los más altos estándares de seguridad.
          </p>
        </div>
        
        <div className="glass-strong border-2 border-dashed border-glass-border rounded-3xl p-12 transition-all hover:border-primary/50 hover:shadow-glow">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-24 h-24 rounded-full glass flex items-center justify-center">
              <UploadCloud className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground">
              Arrastra y suelta tus archivos aquí
            </h2>
            <p className="text-muted-foreground">o</p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Selecciona tus archivos
            </button>
            <p className="text-xs text-muted-foreground pt-4">
              Archivos soportados: PDF, DOCX, TXT. Límite de 25MB.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <FileCheck2 className="w-8 h-8 text-success flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Análisis Inteligente</h3>
              <p className="text-muted-foreground text-sm">
                Nuestro bot extraerá la información clave y te proporcionará insights valiosos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-success flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">Seguridad Garantizada</h3>
              <p className="text-muted-foreground text-sm">
                Tus archivos son encriptados y procesados en un entorno seguro.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecureFileUpload;