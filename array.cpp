#include <iostream>
#include <string>

using namespace std;

string  third_highest(string strArr[], int size) {

	int len1, len2, len3, index1, index2, index3;
	len1 = len2 = len3 = 0;

	//  Get largest word in the string
	for (int y = 0; y < size; y++)
	{
		if (strArr[y].length() > len1)
		{
			len1 = strArr[y].length();
			index1 = y;
		}
	}
	// Get Second largest word in the string
	for (int z = 0; z < size; z++)
	{
		if (strArr[z].length() >= len2 && z != index1)
		{
			len2 = strArr[z].length();
			index2 = z;
		}
	}
	// Get Third largest word
	for (int x = 0; x < size; x++)
	{
		if (strArr[x].length() >= len3 && x != index1 && x != index2)
		{
			len3 = strArr[x].length();
			index3 = x;
		}
	}

	if (len2 == len3)
	{
		return strArr[index2];
	}
	else
	{
		return strArr[index3];
	}
}

int main() {

	string S1[] = { "abcdefgh", "abcdefg", "abcdef", "abcde", "abcd" };
	string S2[] = { "abc", "abc", "abc", "abc", "abc" };
	string S3[] = { "abc", "abcd", "abcd" };
	
    int size_S1 = sizeof(S1)/sizeof(S1[0]);
	cout <<"Array elements: ";
	for (int i = size_S1 - 1; i >= 0; i--) 
    cout << S1[i] << " ";
    third_highest(S1, size_S1 );
    cout << "\nThird highest length string: " << third_highest(S1, size_S1 );
	cout << endl;
	
	int size_S2 = sizeof(S2)/sizeof(S2[0]);
	cout <<"\nArray elements: ";
	for (int i = size_S2 - 1; i >= 0; i--) 
    cout << S2[i] << " ";
    cout << "\nThird highest length string: " << third_highest(S2, size_S2 );
	cout << endl;
	
	int size_S3 = sizeof(S3)/sizeof(S3[0]);
	cout <<"\nArray elements: ";
	for (int i = size_S3 - 1; i >= 0; i--) 
    cout << S3[i] << " ";
    cout << "\nThird highest length string: " << third_highest(S3, size_S3 );
	cout << endl;
	
	return 0;
}
