import { useDropzone } from 'react-dropzone';

const Dropzone = ({ file, handleGetFile, imgClass }) => {
	const { getRootProps, getInputProps } = useDropzone({
		accept: 'image/*',
		onDrop: (acceptedFiles) => {
			handleGetFile(
				acceptedFiles.map((file) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					})
				)
			);
		},
		maxFiles: 1,
	});
	const thumbs = file ? (
		<img
			key={file.name}
			src={file.preview}
			className={!imgClass ? 'w-44 mx-auto' : imgClass}
			// Revoca el objeto URL después de cargar la imagen
			onLoad={() => {
				URL.revokeObjectURL(file.preview);
			}}
			alt='Vista previa'
		/>
	) : null;

	return (
		<div
			className='text-center  flex items-center justify-center'
			{...getRootProps()}>
			<input {...getInputProps()} />
			{file ? (
				<aside className='w-full h-full flex justify-center items-center'>
					{thumbs}
				</aside>
			) : (
				<p>Arrastra una imagen aquí o haz clic para seleccionar una</p>
			)}
		</div>
	);
};

export default Dropzone;
