import  React  from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Если метод был вызван значит есть ошибка!
    // Устанавливаем состояние
    this.setState({ hasError: true });

    // Также можно отправить отчет об ошибке вашему аналитическому сервису
    // logErrorToMyService(error, info);
  }

  render() {
    // Если есть ошибка...
    if (this.state.hasError) {
      // Рендерим fallback UI

      return (
        <>
          <img width="250" src="https://external-preview.redd.it/TZgCvJEivkWFy5AKA9WgovPMRXrlEsl_MRP_LBxNn54.jpg?auto=webp&s=bb436117ab9a14d361101d0fda0696194219a034" alt="" />
          <h1>Something went wrong, please try again later :(</h1>
        </>
      )
    }

    // Если все ок, рендерим детей
    return this.props.children;
  }
}

export default ErrorBoundary;