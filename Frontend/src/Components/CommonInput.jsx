export const CommonInput = ({setter, type = 'text', text = 'Ingrese un texto'}) => {
    return (
          <input
              className='text-sm h-14 w-72 border rounded-md p-3 bg-[#7D7D7D] text-white'
              type={type}
              placeholder={text}
              onChange={(e) => setter(e.target.value)}
          />
      );
  }
  