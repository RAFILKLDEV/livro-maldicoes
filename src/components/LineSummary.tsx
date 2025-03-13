import { irPara } from "../functions";

export interface LineSummaryProps {
	title: string;
	page: number;
	destino: string;
}
export function LineSummary({ title, page, destino }: LineSummaryProps) {
	return (
		<div
			onClick={() => irPara(destino)}
			className="flex justify-between w-[400px] items-center cursor-pointer py-2"
		>
			<span className="text-left font-semibold">{title}</span>
			<span className="flex-1 mt-2 flex-grow border-t border-dashed mx-2"></span>
			<span className="text-right text-gray-600">{page}</span>
		</div>
	);
}
