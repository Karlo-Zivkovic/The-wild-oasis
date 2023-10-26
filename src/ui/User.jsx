import { useUser } from "../features/authentication/useUser";
function User() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <div className="flex items-center gap-3 mr-2 h-9">
      <img
        className=" rounded-full w-10 h-10"
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <p className="text-sm">{fullName}</p>
    </div>
  );
}

export default User;
