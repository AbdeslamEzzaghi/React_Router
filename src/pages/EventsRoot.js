import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsPageLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default EventsPageLayout;
