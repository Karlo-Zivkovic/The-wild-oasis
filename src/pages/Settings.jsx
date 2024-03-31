import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";

function Settings() {
  return (
    <div className="h-[100vh]">
      <h1 className="text-3xl mb-6 font-semibold dark:text-gray-100">
        Update hotel settings
      </h1>
      <UpdateSettingsForm />
    </div>
  );
}

export default Settings;
