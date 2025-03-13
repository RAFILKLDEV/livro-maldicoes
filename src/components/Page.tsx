import { ReactNode } from "react";
import { irPara } from "../functions";

interface PageProps {
	title: string;
	destino?: string;
	pageNumber?: number;
	children: ReactNode;
}

export function Page({ title, destino, pageNumber, children }: PageProps) {
	return (
		<>
			<div className="h-screen flex items-center flex-col justify-center text-sm snap-start">
				<div className="bg-orange-100 w-[500px] h-[550px] text-[13px] flex flex-col items-center border-amber-950 border-10 border-b-14 p-3">
					<h2
						className="font-bold text-orange-900 text-base mb-1 cursor-pointer"
						onClick={() => irPara(destino ?? "")}
					>
						{title}
					</h2>
					{children}
				</div>
				<div className="relative bottom-9">{pageNumber}</div>
			</div>
		</>
	);
}
