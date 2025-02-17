import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.dotPattern}>
          {[...Array(9)].map((_, i) => (
            <View key={i} style={styles.dot} />
          ))}
        </View>
        
        <View style={styles.headerSection}>
          <View style={styles.heartIcon}>
            <Text>⚽</Text>
          </View>
          <View style={styles.helloTag}>
            <Text style={styles.helloText}>Xin chào!</Text>
          </View>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.titleText}>GIỚI THIỆU</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Họ và tên: Nguyễn Thành Tài</Text>
            <Text style={styles.infoText}>MSSV: 122000814</Text>
            <Text style={styles.infoText}>Lớp: 22CT113</Text>
            <Text style={styles.infoText}>Trường: Đại học Lạc Hồng</Text>
          </View>
        </View>

        <View style={styles.bottomDots}>
          <View style={[styles.colorDot, { backgroundColor: '#fff' }]} />
          <View style={[styles.colorDot, { backgroundColor: '#FFE55C' }]} />
          <View style={[styles.colorDot, { backgroundColor: '#E5B8F4' }]} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADD8E6',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    maxWidth: 500,
    position: 'relative',
  },
  dotPattern: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 60,
    height: 60,
  },
  dot: {
    width: 4,
    height: 4,
    backgroundColor: '#000',
    margin: 3,
    borderRadius: 2,
  },
  headerSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  heartIcon: {
    backgroundColor: '#ADD8E6',
    padding: 8,
    borderRadius: 10,
  },
  helloTag: {
    backgroundColor: '#FFE55C',
    padding: 10,
    borderRadius: 8,
  },
  helloText: {
    fontWeight: 'bold',
  },
  infoSection: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  infoContainer: {
    width: '100%',
  },
  infoText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#e0f7fa',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    textAlign: 'center',
  },
  bottomDots: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
    gap: 5,
  },
  colorDot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#000',
  },
});
