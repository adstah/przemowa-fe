import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { VideoTool } from './components/video/VideoTool/VideoTool';
import { Layout } from './components/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <VideoTool />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
