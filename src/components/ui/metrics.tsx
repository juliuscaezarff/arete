import Link from "next/link";

export function Metrics() {
  return (
    <div className="grid grid-cols-2 md:flex md:flex-nowrap gap-8 lg:relative md:divide-x">
      <Link href="/">
        <div className="flex flex-col md:pr-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">Projetos</h4>
          <span className="text-2xl text-white">150+</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">Clientes</h4>
          <span className="text-2xl text-white">80+</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">mercado</h4>
          <span className="text-2xl text-white">5+</span>
        </div>
      </Link>
      <Link href="/">
        <div className="flex flex-col md:px-8 text-center">
          <h4 className="text-[#878787] text-sm mb-4">Satisfação</h4>
          <span className="text-2xl text-white">98%</span>
        </div>
      </Link>
    </div>
  );
}