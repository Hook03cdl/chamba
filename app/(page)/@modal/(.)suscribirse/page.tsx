import CardGlowing, { CardGlowingProps } from '@/components/CardGlowing';
import Each from '@/components/Each';
import { ModalIntercepting } from '@/components/ui/Modal';

export default async function PageSuscripciones() {
	const pricing = [
		{
			benefics: ['Beneficio 1', 'Beneficio 2', 'Beneficio 3', 'Beneficio 4'],
			href: '/perfil',
			price: '30',
			title: 'Basic',
		},
	];
	return (
		<ModalIntercepting>
			<div className="flex gap-10">
				<Each
					of={pricing}
					render={(p: CardGlowingProps) => (
						<CardGlowing
							benefics={p.benefics}
							title={p.title}
							price={p.price}
							href={p.href}
						/>
					)}
				/>
			</div>
		</ModalIntercepting>
	);
}
