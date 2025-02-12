export const getSortedData = (data, sort, currentPath) => {
  const isCoCurricular = currentPath === "/co-curricular-activities";

  const getDurationInMinutes = (duration) => {
    const [time, unit] = duration.split(" ");
    return unit.includes("hour") ? parseFloat(time) * 60 : parseFloat(time);
  };

  return data.sort((a, b) => {
    const getName = (item) => {
      return item.activityName || item.eventName || item.name || item.title || "";
    };

    switch (sort) {
      case "name_asc":
        return getName(a).localeCompare(getName(b));
      case "name_desc":
        return getName(b).localeCompare(getName(a));
      case "latest":
      case "":
      default:
        return new Date(b.date) - new Date(a.date);
      case "oldest":
        return new Date(a.date) - new Date(b.date);
      // Co-curricular specific sorting
      case "duration_asc":
        return isCoCurricular
          ? getDurationInMinutes(a.duration) - getDurationInMinutes(b.duration)
          : 0;
      case "duration_desc":
        return isCoCurricular
          ? getDurationInMinutes(b.duration) - getDurationInMinutes(a.duration)
          : 0;
      case "participants_asc":
        return isCoCurricular ? a.maxParticipants - b.maxParticipants : 0;
      case "participants_desc":
        return isCoCurricular ? b.maxParticipants - a.maxParticipants : 0;
    }
  });
};
