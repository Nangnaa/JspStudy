package com.study.singleton;

public class Tesla {
		private int serialNum = 20210000;
		private static Tesla instance = null;
		
		private Tesla() {
			
		}
		public static Tesla getInstance() {
			if(instance == null) {
				instance = new Tesla();
			} //if를 사용하는 이유는 예외처리를 하는것인데
//			힙메모리에 여유공간이 부족할 경우 instance가 생성이되지않기때문에
//			그것을 미연에 방지하기위해서
			return instance;
		}
		
		public Car createCar(String model ) {
			return new Car(serialNum++, model, getClass().getSimpleName());
		}
}
