const Footer = () => {
  return (
    <footer className="border-t border-glass-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GuanaCloud. Todos los derechos reservados.</p>
            <p className="text-sm mt-2">Powered by GuanaCloud</p>
        </div>
    </footer>
  );
};

export default Footer;