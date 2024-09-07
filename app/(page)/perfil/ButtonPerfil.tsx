'use client'

import { Button } from '@/components/ui/button';
import { openModal } from '@/lib/hooks/useModal';
import Personal from '@/components/signup/Personal';
import { Input } from '@/components/ui/Inputs';

export default function ButtonPerfil() {
	return (
        <Button size={'sm'} className="px-5" onClick={() =>
            openModal({
                content: { header: 'Editar Perfil', body: 
                    <div>
                        <div className='mt-5'>
                            <Input
                                variant='dark'
                                label={'Nombre'}
                                type="text"
                                id="name"
                                className="w-full"
                                required
                            />
                        </div>
                        <div className='mt-4'>
                            <Personal></Personal>
                        </div>
                    </div>
                 },
                })
            }
        >
            Editar perfil
        </Button>
	);
}
