import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useFile } from '../hooks/useFile';
import Dropzone from './DropZone';

export const Modal = ({ isActive, handleToogle }) => {
	const cancelButtonRef = useRef(null);

	const { file, description, getFile, getDescription, addPost } = useFile()

	const handleaddPost = () => {
		if (file == null || description == '') return Swal.fire(
			'Error',
			'Por favor, ingrese una imagen y una descripción',
			'error'
		);
		addPost();
		toogle();
	};

	const toogle = () => {
		getFile([]);
		getDescription('');
		handleToogle();
	};

	return createPortal(
		<Transition.Root
			show={isActive}
			as={Fragment}>
			<Dialog
				as='div'
				className='relative z-10 '
				initialFocus={cancelButtonRef}
				onClose={toogle}>
				<Transition.Child
					as={Fragment}
					enter='ease-out duration-300'
					enterFrom='opacity-0'
					enterTo='opacity-100'
					leave='ease-in duration-200'
					leaveFrom='opacity-100'
					leaveTo='opacity-0'>
					<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
				</Transition.Child>

				<div className='fixed inset-0 z-10 overflow-y-auto'>
					<div className='flex min-h-full items-center  justify-center p-4 text-center '>
						<Transition.Child
							as={Fragment}
							enter='ease-out duration-300'
							enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
							enterTo='opacity-100 translate-y-0 sm:scale-100'
							leave='ease-in duration-200'
							leaveFrom='opacity-100 translate-y-0 sm:scale-100'
							leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
							<Dialog.Panel className='h-[42rem] w-[70rem] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8'>
								<div className='bg-white w-full h-full '>
									<div className='px-4 py-2'>
										<div className='flex justify-between items-center h-9 sm:ml-4 sm:mt-0'>
											<Dialog.Title
												as='h3'
												className='text-base pl-16 sm:pl-0 text-center font-semibold leading-6 text-gray-900 flex-grow'>
												Crear publicación
											</Dialog.Title>
											<button
												onClick={handleaddPost}
												className='text-right text-blue-600 hover:text-blue-800'>
												Compartir
											</button>
										</div>
									</div>
									<div className='grid grid-cols-1 md:grid-cols-4 grid-rows-1 pb-[3.2rem] h-full'>
										<div className='container col-span-3 max-h-auto max-w-full bg-gray-200 overflow-hidden flex justify-center'>
											<Dropzone
												file={file}
												handleGetFile={getFile}
											/>
										</div>
										<div className='bg-gray-50  min-h-fit'>
											<textarea
												onChange={(e) => getDescription(e.target.value)}
												className='w-full h-[4.6rem] md:h-full p-2 outline-none resize-none'
												placeholder='Escribe una descripción'
											/>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition.Root>,
		document.getElementById('modal')
	);
};
