import { useTodayActivity } from "./useTodayActivity";
import Spinner from "../../ui/Spinner";
import TodayItem from "./TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();
  return (
    <div className="col-start-1 col-end-3 row-start-2 row-end-3 flex flex-col bg-white drop-shadow p-6 dark:border-gray-700 dark:divide-gray-900 dark:bg-gray-800 dark:text-gray-100 dark:border">
      <h1 className="text-lg font-semibold pb-4 ">Today</h1>
      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className="overflow-auto border-t">
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p>No activity today...</p>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default TodayActivity;
