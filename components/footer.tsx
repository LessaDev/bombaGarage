export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <div className="flex items-center gap-2">
         {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground font-[var(--font-oswald)]">B</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground font-[var(--font-oswald)]">
            BOMBA GARAGE
          </span> */}
          <img src="/images/logo.png" alt="Logo BOMBA GARAGE" className="h-10 w-10" />
        </div>

        <p className="text-sm text-muted-foreground">
          {`\u00A9 ${year} Bomba Garage Oficina Automotiva. Todos os direitos reservados.`}
        </p>
        <p className="text-sm text-muted-foreground">
          {`By LessaDev`}
        </p>
      </div>
    </footer>
  )
}
