import { Children } from 'react';

interface EachProps {
	of: any[] | undefined;
	render: (item: any, index: number) => React.ReactNode;
}

export default function Each({ of, render }: EachProps) {
	return <>{Children.toArray(of?.map((item, index) => render(item, index)))}</>;
}
