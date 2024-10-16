
const Profile = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <div className="flex justify-center">
          <img
            className="w-24 h-24 rounded-full border-4 border-blue-400"
            src="https://png.pngtree.com/png-vector/20190623/ourlarge/pngtree-accountavataruser--flat-color-icon--vector-icon-banner-templ-png-image_1491720.jpg"
            alt="User Avatar"
          />
        </div>
        <h2 className="mt-4 text-center text-2xl font-semibold text-gray-700">
          John Doe
        </h2>
        <p className="mt-2 text-center text-gray-500">Quyen truy cap: User</p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">About Me</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Passionate developer with experience in creating responsive and
            interactive web applications. Always eager to learn new
            technologies and improve coding skills.
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Contact Info</h3>
          <p className="mt-2 text-gray-600 text-sm">
            Email: johndoe@example.com
          </p>
          <p className="mt-1 text-gray-600 text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
