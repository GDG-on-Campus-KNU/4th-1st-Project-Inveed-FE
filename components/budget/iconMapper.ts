export const getCategoryIcon = (
  category: string
): { name: string; color: string; title: string } => {
  switch (category) {
    case "food":
      return { name: "utensils", color: "#ff8400", title: "식비" };
    case "cafe":
      return { name: "coffee", color: "#795548", title: "카페/간식" };
    case "entertainment":
      return { name: "wine-glass-alt", color: "#9c27b0", title: "술/유흥" };
    case "life":
      return { name: "shopping-basket", color: "#2196f3", title: "생활" };
    case "beauty":
      return { name: "paint-brush", color: "#e91e63", title: "뷰티/미용" };
    case "fashion":
      return { name: "tshirt", color: "#f44336", title: "패션" };
    case "housing":
      return { name: "home", color: "#a75f00", title: "주거/통신" };
    case "health":
      return {
        name: "briefcase-medical",
        color: "#4caf50",
        title: "의료/건강",
      };
    case "others":
      return { name: "ellipsis-h", color: "#000000", title: "기타" };
    default:
      return { name: "question-circle", color: "#9e9e9e", title: "기본값" };
  }
};
