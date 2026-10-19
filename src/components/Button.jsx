function Button({ handleFollow, label }) {
  return (
    <button
      className="cursor-pointer rounded-lg bg-[#FA8112] px-8 py-3 text-xl font-bold text-[#222222]"
      onClick={handleFollow}
    >
      {label}
    </button>
  );
}

export default Button;
